const models = require('../models/db');
const path = require('path');

const trackerController = {};

trackerController.getUse = (req, res, next) => {
  const data = req.body;
  conts user = `
  SELECT user_id FROM Users WHERE account_name = ${data.name};`
  db.query(user)
  .then(arr => {
    res.locals.user = arr;
    return next()
  })
  .catch(err => next(err))
}

trackerController.getCategories = (req, res, next) => {
  let categories = `
  SELECT category.* FROM category`
  db.query(categories)
  .then(arr => {
    res.locals.categories = arr;
    return next()
  })
  .catch(err => next(err))
}

trackerController.getProjects = (req, res, next) => {
  let projects = `SELECT projects.* FROM Users
  INNER JOIN  ON users._id = projects._id`
  db.query(projects)
  .then(arr => {
    res.res.locals.projects = arr;
    return next()
  })
  .catch(err => next(err))
}

trackerController.timerActivity = (req, res, next) => {
  let activity = `
  SELECT Timer_Activity.* FROM Timer_Activity 
  INNER JOIN User ON users._id = timer._id;`
  db.query(activity)
  .then(arr => {
    res.locals.timerActivity = arr;
    return next()
  })
  .catch(err => next(err))
}

trackerController.postProjects = (req, res, next) => {
  console.log('this is req.body', req.body)
  const data = req.body;
  const {title, user_id } = req.body;
  const params = [title, user_id];
  const queryString = `INSERT INTO project (title, user_id) 
  VALUES ($1, $2) 
  RETURNING *`;
  db.query(queryString, params)
  .then((data) => {
    res.locals.addProject = data
    return next();
  }).catch((err) => {
    console.log('Insert query did not work')
    return next(err)
  })
}

trackerController.deleteProjects = (req, res, next) => {
  const data = req.body;
  let deleted = `DELETE FROM Project WHERE title=${data}`;

  db.query(queryString, params)
  .then((data) => {
    res.locals.addProject = data
    return next();
  }).catch((err) => {
    console.log('Insert query did not work')
    return next(err)
  })
}

module.exports = trackerController;
