"use strict";

const service = require("../../services/user");
const { success, error } = require("../../utils/response");

module.exports = {
  add: async (request, h) => {
    const { payload } = request;

    const result = await service.signUp(payload);

    if (!result.success) return error(result.data);

    return success(result.data, "user added");
  },
  editById: async (request, h) => {
    const { payload, params } = request;

    const result = await service.update(payload, params);

    if (!result.success) return error(result.data);

    return success(result.data, "user info edited successfully");
  },
  signin: async (request, h) => {
    const { payload } = request;

    const result = await service.login(payload);

    if (!result.success) return error(result.data);

    return success(result.data, "user signed in");
  },
  deleteById: async (request, h) => {
    const { payload, params } = request;

    const result = await service.delete(payload, params);

    if (!result.success) return error(result.data);

    return success(result.data, "user info deleted successfully");
  },
  followById: async (request, h) => {
    const { payload } = request;

    const result = await service.follow(payload);

    if (!result.success) return error(result.data);

    return success(result.data, "user followed successfully");
  },
  unfollowById: async (request, h) => {
    const { payload } = request;

    const result = await service.unfollow(payload);

    if (!result.success) return error(result.data);

    return success(result.data, "user unfollowed successfully");
  },
  getById: async (request, h) => {
    const { payload, params } = request;

    const result = await service.getUser(params);

    if (!result.success) return error(result.data);

    return success(result.data, "user info fetched successfully");
  },
  getFriendsById: async (request, h) => {
    const { payload, params } = request;

    const result = await service.getFriends(params);

    if (!result.success) return error(result.data);

    return success(result.data, "Friends Info fetched successfully");
  },
  getAll: async (request, h) => {
    const result = await service.getAll();

    if (!result.success) return error(result.data);

    return success(result.data, "Success");
  },

  deleteAll: async (request, h) => {
    const result = await service.deleteAll();

    if (!result.success) return error(result.data);

    return success(result.data, "Success");
  },
};
