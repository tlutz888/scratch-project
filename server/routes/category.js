const express = require('express');

const categoryController = require('../controllers/categoryControllers');

const router = express.Router();


// app.use('/api/:user/categories', )
router.get('/', categoryController.getCategory);
router.post('/', categoryController.createCategoty);



module.exports = router;