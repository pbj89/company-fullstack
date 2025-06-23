const express = require('express');
const router = express.Router();
const { createInquiry } = require('../controllers/inquiryController');

router.post('/inquiry', createInquiry);

module.exports = router;
