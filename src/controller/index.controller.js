const path = require('path');
const model = require('../model/movies.model')

const controller = {
    getMovies: (req, res) => {
        res.send(model.getMovies(1999))
    },

    getOtra: (req, res) => {
        res.sendFile(path.join(__dirname, '../view/otra.html'))
    }
}

module.exports = controller