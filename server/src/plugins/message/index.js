"use strict";

exports.plugin = {
  name: "message",
  version: "1.0.0",
  register: (server) => {
    server.route(require("./routes"));
  },
};
