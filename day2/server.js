const express = require('express') // ดึง library express ขึ้นมา
const app = express() // สร้าง object express เพื่อเอามาใช้งาน
const port = 3000
const bodyParser = require('body-parser');  
// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/myPost',(req, res)=>{ // รับจาก Body
  console.log(req.body.username);
  console.log(req.body.age);
  console.log(req.body.phone);
  res.send('POST ' + req.body['username']);
})
app.put('/myPut',(req, res)=>{ // รับจาก Body
  res.send('PUT Method');
})
app.delete('/myDelete/:id',(req, res)=>{
  res.send('Delete ' + req.params.id);
})
//http      = potocal
//localhost = host
//:3000     = port
//myDelete  = route
//1         = parameter 
app.listen(port, (req, res) => {
  console.log(`Example app listening on port ${port}`)
})