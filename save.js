const express = require("express");
const router = express.Router();

const saveController = require('../controller/save');

router.post('/save-details', saveController.saveDetails);

module.exports = router;