const express = require("express")
//const mongoose = require ("mongoose")

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 8000

app.get("/", (req, res)=>{
    res.json({
        message: "Server is running"
    })

})

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})