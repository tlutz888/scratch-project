const express = require('express');
const router = express.Router();
const db = require('../model/db.js');

router.post('/', timerHistoryController.createTimerEntry, (req, res) => {
  res.status(201).json('timer entry added!');
})

module.exports = router;
