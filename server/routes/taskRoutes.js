const pool = require('../pool.js');
const express = require('express');
const router = new express.Router();

// GET

// POST
router.post('/', (req, res) => {
    console.log('server for post');
    let newTask = req.body.task;
    console.log(newTask);
})
// PUT

// DELETE




module.exports = router