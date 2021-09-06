const dotenv = require('dotenv').config();

const themoviedb = {
    host: process.env.MOVIE_API,
    searchApi: process.env.SEARCH_API,
    }

module.exports = themoviedb;