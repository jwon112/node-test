const express = require('express')
const cors = require('cors')
const app = express()
const port1 = 3000
const port2 = 80

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params
    const q = req.query
    console.log(name)
    
    if(name == "dog"){
        res.json({
            'sound' : '멍멍'
        })
    } else if(name == "cat"){
        res.json({
            'sound' : '야옹'
        })
    } else {
        res.err
    }
});


app.listen(port1, () => {
    console.log(`server running at ${port1}...`)
})

app.listen(port2, () => {
    console.log(`server running at ${port2}...`)
})