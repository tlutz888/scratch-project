const express = require('express');
const db = require('../model/db.js');

const timerHistoryController = {};

timerHistoryController.createTimerEntry = (req, res, next) => {

  const { time_spent, updated_at, category_id, project_id } = req.body;
  const user_id = req.params.user;

  // convert time from request to date string
  const updated_at_string = new Date(updated_at)

  const values = [ time_spent, updated_at_string, category_id, project_id, user_id ];

  const queryText = "INSERT INTO timer_history (time_spent, updated_at, category_id, project_id, user_id) VALUES ($1, $2, $3, $4, $5)";

  db.query(queryText, values)
    .then (data => {
      console.log(`something has been added to the DB`)
      return next()
    })
    .catch (err => next({
      log: 'Error in timerHistoryController.creatTimerEntry',
      status: 400,
      message: err,
    }));
}

module.exports = timerHistoryController;