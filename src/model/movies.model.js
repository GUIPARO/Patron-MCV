const db = require("../model/database.json");
const path = require('path');

const movieModel = {

    getAllMovies: function () {
        return db
    },
    getMovies: function (year) {
        const pelis = this.getAllMovies().filter((m) => m.year >= year);
        return pelis;
    }
}

module.exports = movieModel;