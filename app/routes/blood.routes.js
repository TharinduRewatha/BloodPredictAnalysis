module.exports = app => {
    const tag = require("../controllers/blood.controller.js");

    var router = require("express").Router();

    router.post("/", tag.create);
    app.use('api/colab/finaloutput', tag.findAllActive)

    app.use('/api/tag', router);
    
};