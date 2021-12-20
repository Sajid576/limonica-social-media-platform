const handlers = require("./handlers");
const validators = require("./validators");



module.exports = [
  {
    method: "POST",
    path: "/chat/create",
    handler: handlers.add,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "GET",
    path: "/chat/{userId}",
    handler: handlers.getById,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "GET",
    path: "/chat/{firstUserId}/{secondUserId}",
    handler: handlers.getByTwoId,
    options: {
      auth: false,
      validate: {},
    },
  },
];
