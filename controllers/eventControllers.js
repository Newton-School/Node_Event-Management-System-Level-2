const express = require('express');
const router = express.Router();
const Event = require('../models/eventmodel');
const jwt = require('jsonwebtoken');

//Creating a new Event
const createEvent = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Updating the Event
// const updateEvent = async (req, res) => {
//   // console.log('Heelo ');

//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(decoded);
//     const eventId = req.params.eventId;
//     const { name, invitees, date } = req.body;
//     const event = await Event.findById(eventId);
//     if (!event) {
//       return res.status(404).send('Event not found');
//     }
//     if (event.creator.toString() !== decoded._id) {
//       return res.status(401).send('Unauthorized');
//     } else {
//       event.name = name;
//       event.invitees = invitees;
//       event.date = date;
//       await event.save();
//       res.send('Event updated successfully');
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// };

const updateEvent = async (req, res) => {
  try {
    // Get eventId from request parameters
    const eventId = req.params.eventId;

    // Validate eventId
    const events = Event.findById(eventId);
    if (events) {
      res.send('Success');
    } else {
      res.send('Not success');
    }
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    // ...
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
module.exports = { createEvent, updateEvent };
