const service = require("../../services/posts");
const { success, error } = require("../../utils/response");



module.exports = {
  add: async (request, h) => {
    const { payload, params } = request;

    const result = await service.create(payload);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },
  editById: async (request, h) => {
    const { payload, params } = request;

    const result = await service.update(payload, params);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },
  editByIdV2: async (request, h) => {
    const { payload, params } = request;

    const result = await service.giveLikeUnlike(payload, params);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },
  deleteById: async (request, h) => {
    const { payload, params } = request;

    const result = await service.delete(payload, params);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },
  getById: async (request, h) => {
    const { payload, params } = request;

    const result = await service.getPost(params);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },
  getTimelinePostById: async (request, h) => {
    const { payload, params } = request;

    const result = await service.getTimeLinePosts(params);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },

  getProfileByUsername: async (request, h) => {
    const { payload, params } = request;

    const result = await service.getAllPosts(params);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },
};
