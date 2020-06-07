const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController.js')

router.get('/:user', projectsController.getProjects, (req, res) => {
  res.status(200).json(res.locals.projects);
})

module.exports = router;