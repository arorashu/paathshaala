var express = require('express');
var router = express.Router();

/* GET metadata listing. */
router.get('/', function (req, res, next) {

    const response = {
        desc: 'get metadata details for values' ,
        values: ['universities'] 
    };
    res.json(response);

});

router.get('/getUniversities', function (req, res, next) {

    const response = [
        {name: 'MDU'}
    ];
    res.json(response);

});

module.exports = router;
