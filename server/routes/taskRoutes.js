const pool = require('../pool.js');
const express = require('express');
const router = new express.Router();

// GET

// POST
router.post('/', (req, res) => {
    console.log('server for post');
    let newTask = req.body.task;
    console.log(newTask);
    let sqlQuery = `
        INSERT INTO "task"
            ("task", "complete", "date_completed")
        VALUES
            ($1, false, NULL)
        `;
    pool.query(sqlQuery, [newTask]).then((dbRes) => {
        console.log('succeeded creating new task.');
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error creating new task.')
        res.sendStatus(500);
    })
})
// PUT

// DELETE




module.exports = router