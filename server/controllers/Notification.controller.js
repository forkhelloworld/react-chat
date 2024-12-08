const { Notification } = require("../models");

module.exports.addNewNotification = async (body) => {
  const notif = await Notification.create({
    body,
  });
  return notif;
};
