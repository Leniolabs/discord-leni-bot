const { Events } = require("discord.js");
// const cron = require("cron");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log("ready ✅");
    // let scheduledMessage = new cron.CronJob("*/10 * * * * *", () => {
    // This runs every day at 10:30:00, you can do anything you want
    // const channel = client.channels.cache.get("903474270653534210");
    // channel.send(eval(`hola cada 10 segundos`));
    // });
    // scheduledMessage.start();
  },
};
