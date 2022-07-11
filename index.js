const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('졸리다')
})

app.listen(port, () => {
    console.log(`Example app listening in port ${port}`)
})