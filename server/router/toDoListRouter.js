const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// GET
router.get('/', (req, res) => {
    console.log('get hit');
    res.sendStatus(200);
}) // End Get


// POST
router.post( '/', ( req, res )=>{
    console.log( 'POST hit:', req.body );
    res.sendStatus( 200 );
}) //end Post

module.exports = router;