const axios = require("axios");

module.exports = {
  list: async () => {
    const request = await axios.get("http://localhost:8000/database/Character");
    return request.data;
  },

  create: async (character) => {
    const request = await axios.post("http://localhost:8000/database/Character/create",character);
    return request.data;
  },
  update: async (_id, updatedCharacter) => {
    const request = await axios.put(`http://localhost:8000/database/Character/update/${_id}`,updatedCharacter);
    return request.data;
  },
  delete: async (_id) => {
    const request = await axios.delete(`http://localhost:8000/database/Character/delete/${_id}`);
    return request.data;
  },
};