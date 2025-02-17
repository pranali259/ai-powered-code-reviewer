const express = require("express");
const aiController = require("../controllers/ai.controller");

const router = express.Router();

router.post("/getReviewCode", aiController.getReviewCode);

module.exports = router;
