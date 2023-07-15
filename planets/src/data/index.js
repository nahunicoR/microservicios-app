const axios = require("axios");

module.exports = {
    list: async () => {
    const request = await axios.get("http://localhost:8000/database/Planet");
    return request.data;
    },
    create: async (planet) => {
    const request = await axios.post("http://localhost:8000/database/Planet/create",planet);
    return request.data;
    },
    update: async (planet) => {
        const updatePlanet = {
            error: false,
            message: "actualizado con exito",
            data: { _id: planet._id, name: planet.name },
        };
        return updatePlanet;
    },
};