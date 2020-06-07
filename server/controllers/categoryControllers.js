const express = require('express');
const db =  require('../model/db');

const categoryControllers = {};

// categoryControllers.getCategoryByUserId = (req, res, next) => {

//     const userId = req.params.id;

//     const queryText = 'SELECT * From "category" WHERE user_id = $1';
//     const values = [req.params.id];       

//     db.query(queryText, values, (err, response) => {
        //     if (err) {
        //         console.log('Error in query for getCategoryByUserId: ', err)
        //     }
        //     res.locals.category =reponse.row[0]
        //     return next();
        // });

//         .then(data => { =================================
//             res.locals.data = data.rows;
//             return next();
//         })
//         .catch(err => next({
//             log: 'Error in categoryControllers.getCategory',
//             status: 400,
//             message: err 
//         }));==============================================
// };

// categoryControllers.addCategoryByUserId = (req, res, next) => {
//     const { category_id, title } = req.body;
//     const values = [category_id, title];

//     const queryText = 'INSERT INTO category'
//     db.query(queryText, values)
//         .then(data => {
//             console.log(`${title} has been add to the DB`)
//         })
//         .catch(err => next({
//             log: 'Error in categoryControllers.addCategory',
//             status: 400,
//             message: err,
//         }))
// };

categoryControllers.getCategory = (req, res, next) => {
    const queryText = 'SELECT * From "category"';
    db.query(queryText)
        .then(data => {
            res.locals.data = data.rows;
            return next();
        })
        .catch(err => next({
            log: 'Error in categoryControllers.getCategory',
            status: 400,
            message: err 
        }));
};

categoryControllers.addCategory = (req, res, next) => {
    const { category_id, title } = req.body;
    const values = [category_id, title];

    const queryText = 'INSERT INTO category(category_id, title) VALUES($1, $2)'
    db.query(queryText, values)
        .then(data => {
            console.log(`${title} has been add to the DB`)
            return next();
        })
        .catch(err => next({
            log: 'Error in categoryControllers.addCategory',
            status: 400,
            message: err,
        }))
};



module.exports = categoryControllers;
