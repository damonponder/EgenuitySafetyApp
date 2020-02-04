const express = require("express");
const router = express.Router();
const models = require("../models");
const userHelpers = require("../helpers/route-helpers/users-helper");
const ticketHelpers = require("../helpers/route-helpers/tickets-helper");
const dotenv = require("dotenv");
dotenv.config();

const ZendeskAccessor = require("../helpers/zendesk/zendesk-accessor");
const Zendesk = new ZendeskAccessor({
  domain: process.env.ZENDESK_DOMAIN,
  userEmail: process.env.ZENDESK_USER,
  token: process.env.ZENDESK_TOKEN
});

/******************for testing purposes***********************/
router.get("/testapi", async (req, res) => {
  Zendesk.postToDB();
});
/*************************************************************/

router.get("/pull", async (req, res) => {
  const decoded = await userHelpers.verifyJWT(
    req.header("Authorization"),
    process.env.ACCESS_TOKEN_SECRET
  );
  if (decoded) {
    const user = await models.Requestor.findOne({
      where: { requestorid: decoded.id },
      attributes: ["requestorid", "accesslevel", "contractorid", "operatorid"]
    });
    const { contractorid, operatorid, accesslevel } = user.dataValues;
    const companyName = decoded.companyName.toLowerCase();

    ///CONTRACTOR
    if (contractorid) {
      const tickets = await models.Tickets.findAll({
        where: { contractor: companyName }
      });

      return res.json(tickets);
    }

    //OPERATOR
    if (operatorid) {
      if (accesslevel === 2) {
        const contractors = await models.Contractor.findAll({
          where: { operatorid },
          attributes: ["contractorname"]
        });

        const contractorNames = contractors.map(contractor => {
          return contractor.dataValues.contractorname;
        });

        try {
          const tickets = contractorNames.map(async name => {
            return await models.Tickets.findOne({
              where: {
                operator: companyName,
                contractor: name
              }
            });
          });
        } catch (err) {
          console.log(err);
        }
      }

      if (accesslevel === 3) {
        const tickets = await models.Tickets.findAll({
          where: { operator: companyName }
        });
        return res.json(tickets);
      }
    }
  }
});

router.post("/:pageSize/:page", async function(req, res, next) {
  const pageSize = Number(req.params.pageSize);
  const page = Number(req.params.page);

  const decoded = await userHelpers.verifyJWT(
    req.body.token,
    process.env.ACCESS_TOKEN_SECRET
  );
  models.Tickets.findAll(
    await ticketHelpers.buildTicketQuery(
      pageSize,
      page,
      decoded.userData.access_level_id,
      decoded.userData.company_id
    )
  )
    .then(tickets => {
      return ticketHelpers.addCompanyToTickets(tickets);
    })
    .then(ticketsWithCompany => {
      res.json(ticketsWithCompany);
    });
});

router.post("/pull", async (req, res) => {
  Zendesk.pull();
  res.statusCode == 204;
  res.send();
});
router.post("/ticketapproval", async (req, res) => {
  models.Tickets.findOne({
    where: { id: req.body.ticketid }
  }).then(ticket => {
    ticket.update({
      approval: true
    });
    res.statusCode == 204;
    res.send();
  });
});

module.exports = router;
