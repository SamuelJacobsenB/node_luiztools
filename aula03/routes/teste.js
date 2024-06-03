const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('teste',{title: 'Node is super cool', numero: 10})
});

module.exports = router;