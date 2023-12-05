
const express = require('express')
const app = express()
const port = 3000
const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const client = require('./connect')
app.get('/getConnection', async (req , res)=>{
    await client.connect();
    const row = await client.query('SELECT NOW()')
    client.end();
    res.send({rows : row});
})
app.post('/insertData', async ( req , res )=>{
  await client.connect();
  const sendData = await client.query('INSERT INTO tb_books(isbn,name,price) VALUES ($1,$2,$3)',[
    req.body.isbn,
    req.body.book_name,
    req.body.book_price
  ])
  await client.end();
  res.send({result: sendData});
});
app.get('/getData', async ( req , res )=>{
  await client.connect();
  const sendData = await client.query('SELECT * FROM tb_books WHERE 1=1')
  await client.end();
  res.send({result: sendData.rows});
});
app.put('/update', async (req , res)=>{
  await client.connect();
  const dataUpdate = await client.query('UPDATE tb_books SET name = $1 , price = $2 WHERE id = $3',[
    req.body.book_name,
    req.body.price,
    req.body.id

  ])
  await client.end();
  res.send({update: dataUpdate});
})
app.delete('/delete', async (req , res)=>{
  await client.connect();
  const deleteData = await client.query('DELETE FROM tb_books WHERE id = $1',[
    req.body.id
  ]);
  await client.end();
  res.send({result:deleteData});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
