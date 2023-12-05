const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const pg = require('./connect')
app.use(bodyParser.urlencoded({extends: true}))
app.use(bodyParser.json())
app.get('/', ( req , res )=>{
    res.send('getter')
})
app.get('/testConnection', async ( req , res )=>{
    try {
        await pg.authenticate();
        res.send('Connection has been established successfully.');
      } catch (error) {
        res.send('Unable to connect to the database:', error);
      }
})
const UserModel = require('./models/UserModel')
app.post('/postUser' , async (req , res)=>{
    const rows = await UserModel.create(req.body);
    res.send({rows: rows})
})
app.get('/selectData' , async (req , res)=>{
    const rows = await UserModel.findAll()
    res.send({rows: rows})
})
app.get('/selectDataPrimaryKey/:id' , async (req , res)=>{
    const rows = await UserModel.findByPk(req.params.id)
    res.send({rows: rows})
})
app.put('/updateData', async (req , res)=>{
    const rows = await UserModel.update(req.body, {
        where: {
            id: req.body.id
        }
    })
    res.send({rows: rows})
})
app.delete('/del/:id', async (req , res)=>{
    const rows = await UserModel.destroy({
        where: {
            id: req.params.id
        }
    })
    res.send({rows: rows})
})
app.listen(3000,()=>{
    console.log('start server port 3000.');
})