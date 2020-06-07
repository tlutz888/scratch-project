const express = require('express');

const categoryController = require('../controllers/categoryControllers');

const router = express.Router();


// app.use('/api/categories') /:user
router.get('/api/categories', categoryController.getCategory, (req,res) => {
    res.status(200).json(res.locals.data);
});

router.post('/api/categories', categoryController.addCategory, (req,res) => {
    res.status(201).json('new category is added');
});
// router.get('/:user', categoryController.getCategory);
// router.post('/:user', categoryController.addCategoty);



module.exports = router;