const express = require('express');
const router = express.Router();
const { createEvent, updateEvent } = require('../controllers/eventControllers');
const { update } = require('../models/eventModel');

router.post('/event', createEvent);
// router.put('/update:eventId', updateEvent);
router.put('/update:eventId', updateEvent);

module.exports = router;
