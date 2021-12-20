const service = require("../../services/message");
const { success, error } = require("../../utils/response");

module.exports = {
  add: async (request, h) => {
    const { payload, params } = request;

    const result = await service.create(payload);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },
  getById: async (request, h) => {
    const { payload, params } = request;

    const result = await service.get(params);

    if (!result.success) return error(result.data);

    return success(result.data, "successful");
  },
};
