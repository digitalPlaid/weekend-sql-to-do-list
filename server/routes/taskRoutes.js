const pool = require('../pool.js');
const express = require('express');
const router = new express.Router();

// GET
router.get('/', (req, res) => {
    let sqlQuery = `
        SELECT * FROM "task" ORDER BY "id";
        `;
    pool.query(sqlQuery).then((dbResponse) => {
        console.log('successfully got tasks');
        res.send(dbResponse.rows);
    }).catch((error) => {
        console.log('failed to get tasks from db');
        res.sendStatus(500);
    })
});

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
});

// PUT
router.put('/:id', (req, res) => {
    console.log('taking a put action');
    // add query 
    let id = req.params.id;
    let date = Date.now();
    console.log('id of put is: ', id);
    let sqlQuery = `
        UPDATE "task"
        SET "complete" = true, "date_completed" = to_timestamp(${date}/1000)
        WHERE "id" = $1
        `; // found the to_timestamp expression on a stack overflow. seems to work.
    pool.query(sqlQuery, [id]).then((dbResponse) => {
        console.log('successfully put data to server.');
        res.sendStatus(204);
    }).catch(error => {
        console.log('error putting data to db: ', error);
        res.sendStatus(500);
    })
});

// DELETE
router.delete('/:id', (req, res) => {
    console.log('in delete');
    let id = req.params.id;
    let sqlQuery = `
        DELETE FROM "task"
        WHERE "id" = $1`;
    pool.query(sqlQuery, [id]).then((dbRes) => {
        console.log('delete succeeded');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('delete from db failed: ', error);
        res.sendStatus(500);
    })
});



module.exports = router