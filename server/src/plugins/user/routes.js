const handlers = require("./handlers");
const validators = require("./validators");

module.exports = [
  {
    method: "POST",
    path: "/user/signup",
    handler: handlers.add,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "PUT",
    path: "/user/update/{id}",
    handler: handlers.editById,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "PUT",
    path: "/user/{id}/follow",
    handler: handlers.followById,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "PUT",
    path: "/user/{id}/unfollow",
    handler: handlers.unfollowById,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "POST",
    path: "/user/signin",
    handler: handlers.signin,
    options: {
      auth: false,
      validate: {},
    },
  },

  {
    method: "GET",
    path: "/user/allUsers",
    handler: handlers.getAll,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "GET",
    path: "/user/{userId}",
    handler: handlers.getById,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "GET",
    path: "/user/friends/{userId}",
    handler: handlers.getFriendsById,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "DELETE",
    path: "/user/deleteAllUsers",
    handler: handlers.deleteAll,
    options: {
      auth: false,
      validate: {},
    },
  },
  {
    method: "DELETE",
    path: "/user/deleteUser/{id}",
    handler: handlers.deleteById,
    options: {
      auth: false,
      validate: {},
    },
  },
];
