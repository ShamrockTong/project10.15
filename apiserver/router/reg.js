const express = require("express")
const { format } = require("mysql")

const db = require(`../db`)

const router = express.Router()
const {formateData} = require('../utils')
module.exports = router

router.post(`/`,async (req,res)=>{
    const {username,password} = req.body
    const sql = `insert into user(username,password) values('${username}','${password}')`
    console.log(username,password);
    const data = await db(sql)
    if(data.insertId){
        res.send({
            formateData()
        })
    }else{
        res.send(formateData.fail())
    }
})

router.get('/check',async(req,res)=>{
    const {username} = req.query
    const sql = `select username from user where username='${username}'`
    console.log('sql=',sql)
    const data = await db(sql)
    console.log(data);
    if(data.length>0){
        console.log('code:400');
        res.send(
            formateData.fail()
        )
    }else{
        console.log('code:200');
        res.send(
            formateData()
    )
    }
})

