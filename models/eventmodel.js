const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    invitees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
