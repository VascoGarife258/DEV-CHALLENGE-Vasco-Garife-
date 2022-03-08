
const express=require('express')
const cors=require('cors')
const { response } = require('express')
const app=express()
app.use(cors())
const port =5501

 app.get('/',(req,res) => res.json({data:'Secret data'}))

app.listen(port,()=>console.log(`Example app at http://localhost:${port}`)) 


