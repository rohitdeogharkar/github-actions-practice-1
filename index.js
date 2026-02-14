const express = require('express')

const app = express()

const PORT = process.env.PORT ?? 8080

app.get('/', (req, res)=>{
    return res.json({msg : 'Hello from auto deploy serverrrrrrrrrrrrrrrrr v222222222222222222222222222'})
})

app.listen(PORT, ()=>{
    console.log(`server is ready on ${PORT}`)
})