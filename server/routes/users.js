var express = require("express");
var router = express.Router();
const models = require("../models");
const bcrypt = require("bcrypt");

const helpers = require("../helpers/route-helpers/users-helper");

router.post("/login", (req, res) => {
  models.Requestor.findOne({
    where: {
      email: req.body.email
    },
    attributes: [
      "requestorid",
      "email",
      "password",
      "accesslevel",
      "operatorid",
      "contractorid"
    ]
  })
    .then(async user => {
      if (!user) return { error: "Could not sign in." };

      return helpers.checkPassword(req.body.password, user.password, user);
    })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.statusCode = 500;
      res.json(err);
      console.log(err);
    });
});

router.post("/new", async (req, res) => {
  let user = models.User.findOne({
    where: { email: req.body.email },
    attributes: ["id", "username"]
  });
  if (user)
    res.json({
      message: "User already exists!",
      existingUser: user
    });
  else {
    models.User.create({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      createdAt: new Date(),
      updatedAt: new Date(),
      company_id: req.body.company_id,
      access_level_id: req.body.access_level_id
    }).then(user =>
      res.json({
        message: "User created"
      })
    );
  }
});

/**
 * @deprecated Unused.
 */
router.post("/verify", (req, res) => {
  res.send("This route has been deprecated");
});

module.exports = router;
