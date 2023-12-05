const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extends: true}))
app.use(bodyParser.json())

const pg = require('./connect')
app.get('/testConnection', async (req,res)=>{
    try {
        await pg.authenticate();
        console.log('Connection has been established successfully.');
        res.send('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        res.send('Unable to connect to the database:', error);  
    }
    
})
//import model employee 
const EmployeeModel = require('./models/employee')

app.post('/insert', async ( req,res )=>{
    const rows = await EmployeeModel.create(req.body)
    res.send({data: rows})

})
app.get('/select' , async (req , res )=>{
    const rows = await EmployeeModel.findAll();
    res.send({rows: rows})

})
app.delete('/deleteData/:id', async (req , res)=>{
    const rows = await EmployeeModel.destroy({ 
        where: {
            id: req.params.id
        }
    })
    res.send({rows: rows})
})
app.put('/update' , async (req , res)=>{
    const rows = await EmployeeModel.update(req.body , {
        where: {
            id: req.body.id
        }
    })
    console.log(rows);
    res.send({rows: rows})
})
app.listen(3000,()=>{
    console.log('Start Server Success Port 3000.');
})