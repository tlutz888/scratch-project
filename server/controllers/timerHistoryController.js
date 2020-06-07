const express = require('express');
const db = require('../model/db.js');

const timerHistoryController = {};

timerHistoryController.createTimerEntry = (req, res, next) => {

  /* *********

  INSERT INTO timer_history (time_spent, updated_at, category_id, project_id, user_id)
  VALUES (240, '2008-11-11 13:23:44', 1, 1, 1)

  ********* */

  // const { time_spent, updated_at, category_id, project_id } = req.body
  // const values = [ time_spent, updated_at, category_id, project_id ]
  // const user_id = req.params.user_id

  const queryText = "INSERT INTO timer_history (time_spent, updated_at, category_id, project_id, user_id) VALUES (240, '2008-11-11 13:23:44', 1, 1, 1)"

  // const queryText = "INSERT INTO timer_history (time_spent, updated_at, category_id, project_id, user_id) VALUES ($1, $2, $3, $4, $5)"

  db.query(queryText)
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



modules.export = timerHistoryController;