const axios = require("axios");
const models = require("../../models");
const _ = require("lodash");

module.exports = class accessor {
  constructor(obj) {
    this.domain = obj.domain;
    this.user = obj.userEmail;
    this.token = obj.token;
    this.apiUrl = this.domain + "/api/v2";
  }

  async get() {
    let payload = await axios.get(
      this.apiUrl + "/tickets.json?sort_by=updated_at&sort_order=desc",
      {
        auth: {
          username: this.user,
          password: this.token
        }
      }
    );
    return payload.data.tickets;
  }

  //todo: make one that updates or else there will be duplicates
  async postToDB() {
    const findCustomFieldValue = (fieldName, fieldsArr) => {
      let fieldIds = {
        contractor: 360031785854,
        Escalation_Level: 360031803393,
        region: 360031822574,
        incidentDate: 360031858493,
        category: 360031872093,
        ticketIncident: 360031872113,
        ticketResolution: 360031882714,
        operator: 360032324633,
        rig: 360031819014
      };
      let filteredArr = fieldsArr.filter(field => {
        return field.id == fieldIds[fieldName];
      });
      if (filteredArr.length > 1)
        throw new Error(
          "Custom Fields contain 2 or more fields with identical ids."
        );
      if (filteredArr.length < 1)
        throw new Error(`No fields were returned. ${fieldName} ${fieldsArr}`);
      return filteredArr[0].value;
    };

    const tickets = await this.get();

    let newTickets;
    try {
      newTickets = await Promise.all(
        tickets.map(async ticket => {
          return {
            zendesk_id: ticket.id,
            assignee: `${ticket.assignee_id}`,
            priority: ticket.priority,
            status: ticket.status,
            description: ticket.description,
            subject: ticket.subject,
            contractor: findCustomFieldValue("contractor", ticket.fields),
            escalationlevel: findCustomFieldValue(
              "Escalation_Level",
              ticket.fields
            ),
            region: findCustomFieldValue("region", ticket.fields),
            incidentDate: new Date(
              findCustomFieldValue("incidentDate", ticket.fields)
            ),
            category: findCustomFieldValue("category", ticket.fields),
            incident: findCustomFieldValue("ticketIncident", ticket.fields),
            resolution: findCustomFieldValue("ticketResolution", ticket.fields),
            operator: findCustomFieldValue("operator", ticket.fields),
            rig: findCustomFieldValue("rig", ticket.fields),
            updatedAt: ticket.updated_at,
            createdAt: Date.now()
          };
        })
      );
    } catch (err) {
      throw new Error(err);
    }

    let oldTickets = await models.Tickets.findAll();
    oldTickets = oldTickets.map(ticket => {
      return ticket.toJSON();
    });

    try {
      newTickets.map(async ticket => {
        let foundTicket = await models.Tickets.findOne({
          where: { zendesk_id: ticket.zendesk_id }
        });
        if (!foundTicket) {
          return await models.Tickets.create(ticket);
        } else {
          return await models.Tickets.update(ticket, {
            where: { zendesk_id: ticket.zendesk_id }
          });
        }
      });
    } catch (err) {
      throw new Error(err);
    }
  }
};
