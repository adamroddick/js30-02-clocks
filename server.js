const express = require('express')
const path = require('path')

app = express()
port = 3009

app.use(express.static('/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})