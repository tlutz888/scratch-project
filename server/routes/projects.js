const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController.js')

router.get('/', projectsController.getProjects, (req, res) => {
  res.status(200).json(res.locals.projects);
})

router.post('/', projectsController.addProject, (req, res) => {
  res.status(200).json('project added!');
})

router.delete('/', projectsController.deleteProject, (req, res) => {
  res.status(200).json(res.locals.projects)
})

module.exports = router;