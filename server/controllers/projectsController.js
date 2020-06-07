const express = require('express');
const db = require('../model/db.js');

const projectsController = {};

projectsController.getProjects = (req, res, next) => {
  const queryText = 'SELECT * FROM project WHERE user_id = $1;';
  const values = [req.params.user]

  db.query(queryText, values)
    .then(data => {
      res.locals.projects = data.rows;
      return next();
    })
    .catch(err => next({
      log: 'Error in projectsController.getProjects',
      status: 400,
      message: err,
    }));
}

// projectsController.addProjects = (req, res, next) => {
//   const data = req.body;
//   const {title, user_id } = req.body;
//   const values = [title, user_id];
//   const queryText = `INSERT INTO project (title, user_id) 
//   VALUES ($1, $2) 
//   RETURNING *;`;

//   db.query(queryText, values)
//     .then(data => {
//       res.locals.projects = data.rows;
//       return next();
//     })
//     .catch(err => next({
//       log: 'Error in projectsController.addProjects',
//       status: 400,
//       message: err,
//     }));
// }

// projectsController.deleteProjects = (req, res, next) => {
//   const data = req.body;
//   const {title, user_id } = req.body;
//   const values = [title, user_id];
//   let deleted = `DELETE FROM Project WHERE title=$1 AND user_id=$2;`;

//   db.query(queryText, values)
//     .then(data => {
//       res.locals.projects = data.rows;
//       return next();
//     })
//     .catch(err => next({
//       log: 'Error in projectsController.deleteProjects',
//       status: 400,
//       message: err,
//     }));
// }
module.exports = projectsController;