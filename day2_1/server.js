
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('method get')
})
app.post('/post',function(req,res){
    res.send('username : ' + req.body['username'] + ' password : ' + req.body['password']);
})
app.put('/put',function(req,res){
  res.send('method put');
})
app.delete('/delete/:uid/:username',function(req,res){
  res.send('method delete userID : ' + req.params.uid + ' username : ' + req.params.username);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
