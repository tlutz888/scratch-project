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

timerHistoryController.getTimerHistory = (req, res, next) => {
  const user_id = req.params.user;
  const values = [user_id];
  const queryText = `
    SELECT SUM(th.time_spent) as time_spent, th.category_id, c.title, th.project_id, p.title
    FROM timer_history th
    INNER JOIN category c ON th.category_id = c._id
    INNER JOIN project p ON th.project_id = p._id
    WHERE th.user_id = $1
    GROUP BY th.category_id, c.title, th.project_id, p.title;
  `;

  db.query(queryText, values)
    .then (data => {
      res.locals.timerHistory= data.rows;
      return next()
    })
    .catch (err => next({
      log: 'Error in timerHistoryController.getTimerHistoryByProject',
      status: 400,
      message: err,
    }));
}

timerHistoryController.getTimerHistoryByCategory = (req, res, next) => {
  const user_id = req.params.user;
  const values = [user_id];
  const queryText = "SELECT SUM(time_spent) as time_spent, category_id FROM timer_history WHERE user_id = $1 GROUP BY category_id";

  db.query(queryText, values)
    .then (data => {
      res.locals.timerHistoryByCategory = data.rows;
      return next()
    })
    .catch (err => next({
      log: 'Error in timerHistoryController.getTimerHistoryByCategory',
      status: 400,
      message: err,
    }));
}

module.exports = timerHistoryController;