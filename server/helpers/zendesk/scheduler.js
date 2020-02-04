const ZendeskAccessor = require("./zendesk-accessor");
const Zendesk = new ZendeskAccessor({
  domain: process.env.ZENDESK_DOMAIN,
  userEmail: process.env.ZENDESK_USER,
  token: process.env.ZENDESK_TOKEN
});

const cron = require("node-cron");
//to do: need to change this and have it update instead because it was overwriting everything
module.exports = cron.schedule("0 0 * * * *", () => {
  Zendesk.postToDB()
    .then(() => {
      console.log(
        `Automated Pull Completed at: ${new Date().toLocaleString()}`
      );
    })

    .catch(err => {
      console.log(`Automated Pull Failed at: ${new Date().toLocaleString()}`);
      console.log(err);
    });
});
