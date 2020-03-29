const express = require('express')

const app = express()

const port = 3000;

app.get('/', (response, request) => {
    response.send('Hello exress: )')
})

app.listen(port, () =>{
    console.log(`Express server listening on port ${port}!`)
})