const axios = require("axios");

module.exports = {
    list: async () => {
        const request = await axios.get("http://localhost:8000/database/Film");
        return request.data;
      },
      create: async (film) => {
        const request = await axios.post(
          "http://localhost:8000/database/Film/create",
          film
        );
        return request.data;
      },
      update: async (id, updatefilm) => {
        const request = await axios.put(
          `http://localhost:8000/database/Film/update/${id}`,
          updatefilm
        );
        return request.data;
      },
      delete: async (id) => {
        const request = await axios.delete(
          `http://localhost:8000/database/Film/delete/${id}`
        );
        return request.data;
      },
}