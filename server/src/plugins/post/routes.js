const handlers = require("./handlers");
const validators = require("./validators");



module.exports = [
  {
    method: "POST",
    path: "/post/create",
    handler: handlers.add,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "PUT",
    path: "/post/update/{id}",
    handler: handlers.editById,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "PUT",
    path: "/post/{id}/like",
    handler: handlers.editByIdV2,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "DELETE",
    path: "/post/deletePost/{id}",
    handler: handlers.deleteById,
    options: {
      auth: false,
      validate: {},
    },
  },

  {
    method: "GET",
    path: "/post/{id}",
    handler: handlers.getById,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "GET",
    path: "/post/timeline/{userId}",
    handler: handlers.getTimelinePostById,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "GET",
    path: "/post/profile/{username}",
    handler: handlers.getProfileByUsername,
    options: {
      auth: false,
      validate: {},
    },
  },
];
