const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../../config');

const url = config.host;

router.get('/', (req, res) => {
    function showMovies(url, page = 1) {

        axios.get(url + page)
            .then(response => {
                res.render('home', { appl: response.data.results });
            }, error => {
                console.log(error);
            });

    }
    showMovies(url);

})

router.post('/search', (req, res) => {
    const { search } = req.body;

    if (search) {

        axios.get(config.searchApi + search)
            .then(response => {
                res.render('home', { appl: response.data.results });
            }, error => {
                console.log(error);
            });
    }
});
let i = 1;
router.post('/', (req, res) => {

    function showMovies(url, page = 1) {

        axios.get(url + page)
            .then(response => {
                res.render('home', { appl: response.data.results });
            }, error => {
                console.log(error);
            });

    }

    const { btn1 } = req.body;
    if (btn1 === 'btn2') {
        i = i + 1;
    } else {
        i = i === 1 ? 1 : i - 1;
    }
    showMovies(url, i);
})

module.exports = router;
