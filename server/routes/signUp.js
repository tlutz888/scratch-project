const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js')
const categoryController = require('../controllers/categoryController.js')
const projectsController = require('../controllers/projectsController.js')
const timerHistoryController = require('../controllers/timerHistoryController.js')

router.post('/', userController.createUser, categoryController.getCategory, projectsController.getProjects, timerHistoryController.getTimerHistory, (req, res) => {
  res.status(201).json({
    user: res.locals.user,
    categories: res.locals.categories,
    projects: res.locals.projects,
    timerHistory: res.locals.timerHistory
  });
})

module.exports = router;