const handlers = require("./handlers");
const validators = require("./validators");



module.exports = [
  {
    method: "POST",
    path: "/message/add",
    handler: handlers.add,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "GET",
    path: "/message/{conversationId}",
    handler: handlers.getById,
    options: {
      auth: false,
      validate: {},
    },
  },
];
