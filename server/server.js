const express = require('express')
const cors = require('cors');

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)


// middlewares -------------------------------------
app.use(express.json())
app.use(cors());
// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send("Api funcionando")
})

app.use('/api/bodeguero', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})