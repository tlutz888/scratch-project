const express = require('express');
const router = express.Router();

const timerHistoryController = require('../controllers/timerHistoryController.js')

router.post('/:user', timerHistoryController.createTimerEntry, (req, res) => {
  res.status(201).json('timer entry added!');
})

router.get('/:user', timerHistoryController.getTimerHistory, (req, res) => {
  res.status(201).json(res.locals.timerHistory);
})

router.get('/category/:user', timerHistoryController.getTimerHistoryByCategory, (req, res) => {
  res.status(201).json(res.locals.timerHistoryByCategory);
})

module.exports = router;
