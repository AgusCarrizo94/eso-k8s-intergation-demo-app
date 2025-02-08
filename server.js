import 'dotenv/config'
import express from 'express'

const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send({
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    })
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`)
})