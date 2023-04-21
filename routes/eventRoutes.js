const express = require('express');
const router = express.Router();
const { createEvent, updateEvent } = require('../controllers/eventControllers');
const { update } = require('../models/eventmodel');

router.post('/event', createEvent);
// router.put('/update:eventId', updateEvent);
router.put('/update:eventId', updateEvent);

module.exports = router;
