const jwt = require("jsonwebtoken");
const models = require("../../models");
const bcrypt = require("bcrypt");

const verifyJWT = (token, secret) => {
  let decoded;
  try {
    return (decoded = jwt.verify(token, secret));
  } catch {
    return { error: "Invalid or broken token." };
  }
};

const checkPassword = async (passwordToCheck, storedPassword, user) => {
  return new Promise(async (resolve, reject) => {
    let isMatch = bcrypt.compare(passwordToCheck, storedPassword);
    if (isMatch) {
      let accessLevel = models.Access_Levels.findOne({
        where: { id: user.dataValues.accesslevel },
        attributes: ["access_desc"]
      });
      let companyName;
      if (user.dataValues.operatorid) {
        const company = await models.Operator.findOne({
          where: { operatorid: user.dataValues.operatorid },
          attributes: ["operatorname"]
        });
        companyName = company.dataValues.operatorname;
      }
      if (user.dataValues.contractorid) {
        const company = await models.Contractor.findOne({
          where: { contractorid: user.dataValues.contractorid },
          attributes: ["contractorname"]
        });
        companyName = company.dataValues.contractorname;
      }

      resolve({
        token: jwt.sign(
          {
            username: user.dataValues.email,
            id: user.dataValues.requestorid,
            companyName,
            accesslevel: user.dataValues.accesslevel
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "12h" }
        ),
        userData: {
          accesslevel: user.dataValues.accesslevel,
          companyName,
          hasElevatedPermissions:
            accessLevel.access_desc === "Admin" ||
            accessLevel.access_desc === "superuser"
        }
      });
    } else {
      resolve({ error: "Could not sign in." });
    }
  });
};

module.exports = {
  verifyJWT,
  checkPassword
};
