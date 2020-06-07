const express = require('express');
const router = express.Router();

const timerHistoryController = require('../controllers/timerHistoryController.js')

router.post('/:user', timerHistoryController.createTimerEntry, (req, res) => {
  res.status(201).json('timer entry added!');
})

module.exports = router;
