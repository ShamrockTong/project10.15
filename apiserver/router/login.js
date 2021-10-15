const express = require('express')
const router = express.Router()
module.exports = router 

const db = require('../db')
const {formateData} = require('../utils')

router.get('/',async (req,res)=>{
    const {username,password,mdl} = req.query

    const sql = `select id,username,gender,regdate from user where username='${username}' and password='${password}'`

    const data = await db(sql)

    if(data.length>0){
        //用户名密码正确
        res.send(formateData({
            data:data[0]
        })
        )
    }else{
        res.send( 
            formateData.fail()
        )
    }
})