const { response } = require('express')
const express = require('express')
const router = express.Router()

module.exports = router

const db = require('../db')
const {formateData} = require('../utils')

// get /api/user/list
router.get('/list',async(req,res)=>{
    const sql='select * from user'
    const data = await db(sql)
    // res.send(formateData({data}))
    res.send(formateData.success(data))
})

// get /api/user
router.post('/',(req,res)=>{
    res.send()
})

// get /api/user
router.delete('/',(req,res)=>{
    res.send()
})

// get /api/user/:id
router.put('/:id',(req,res)=>{
    res.send()
})

router.get('/:id',(req,res)=>{
    res.send()
})
