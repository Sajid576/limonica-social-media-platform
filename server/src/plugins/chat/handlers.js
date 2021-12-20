const service = require("../../services/chat");
const { success, error } = require("../../utils/response");

module.exports = {
  add: async (request, h) => {
    const { payload, params } = request;

    const result = await service.createConvo(payload);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },
  getById: async (request, h) => {
    const { payload, params } = request;

    const result = await service.getConvoById(params);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },
  getByTwoId: async (request, h) => {
    const { payload, params } = request;

    const result = await service.getConvoOfTwoUsers(params);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },
};
