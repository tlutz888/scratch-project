const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController.js')

router.get('/:user', projectsController.getProjects, (req, res) => {
  res.status(200).json(res.locals.projects);
})


router.post('/:use/addproject', trackerController.postProjects,
  (req, res) => res.send(200).json(res.locals.addProject)
);

router.delete('/:use/deleteproject', trackerController.deleteProjects,
(req, res) => res.send(200).json(res.locals.deleteProject)
);

module.exports = router;