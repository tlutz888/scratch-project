/* eslint-disable function-paren-newline */
const express = require('express');

const trackerController = require('../controllers/trackerController');

const router = express.Router();
router.get('/', trackerController.getUse, trackerController.getCategories, trackerController.getProjects, trackerController.timerActivity,
  (req, res) => {
    res.status(200).json({user: res.locals.user, categories: [...res.locals.categories], projects: [...res.locals.projects], timerActivity: [...res.locals.timerActivity]})
  }
);

router.post('/addProject', trackerController.postProjects,
  (req, res) => res.send(200).json(res.locals.addProject)
);

router.delete('/deleteProject', trackerController.deleteProjects,
(req, res) => res.send(200).json(res.locals.deleteProject)
);

module.exports = router;
