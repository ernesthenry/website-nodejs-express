const express = require('express')
const path = require('path')

const app = express()

const port = 3000;

app.use(express.static(path.join(__dirname, './provided/static')))

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '.provided/static/index.html'))
})

app.get('/speakers', (request, response) => {
    response.sendFile(path.join(__dirname, '.provided/static/speakers.html'))
})

app.listen(port, () =>{
    console.log(`Express server listening on port ${port}!`)
})