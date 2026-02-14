const express = require('express')

const app = express()

const PORT = process.env.PORT ?? 8080

app.get('/', (req, res)=>{
    console.log("a hittttt", new Date())
    return res.json({msg : 'Hello from auto deploy serverrrrrrrrrrrrrrrrr its working -- CICD'})
})

app.listen(PORT, ()=>{
    console.log(`server is ready on ${PORT}`)
})