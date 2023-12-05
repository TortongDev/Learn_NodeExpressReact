
const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  let date = new Date();
  console.log(date.getFullYear());
  console.log(date.getMonth() + 1);
  console.log(date.getDate());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());
  console.log(date.getTime());
  console.log(date.toLocaleString());
  console.log(date.toLocaleString('th-TH'));
  res.send('success')
})
app.get('/myNumbers',(req , res)=>{
  let x = 10.88;
  let y = '15.21';
  let result = x + parseInt(y);
  res.send({result: (result.toFixed(2) + "")})
})
app.get('/myStrings',(req , res)=>{
  let str = "Hello Node.js Developer in Thailand.";
  str = str.concat(" in Group Facebook")
  let arr = str.split(' ');
  for (let j = 0; j < arr.length; j++) {
    const element = arr[j];
    console.log(element);
  }
  let count_i = 0;
  for (let j = 0; j < str.length; j++) {
   if(str.charAt(j) == 'i'){ //หรือฟังก์ชันสำหรับดึงตัวอักษรจากตำแหน่งที่ต้องการ
    count_i++
   }
  }
  console.log(count_i);
  res.send({
    str: str,
    strLength: str.length, // ความยาวตัวอักษร
    indexOf: str.indexOf('Node'), //หาตำแหน่งของ Node
    startHello: str.startsWith('Hello'), // ตัวอักษรขึ้นต้นด้วย Hello ไหม true and false
    endWidth: str.endsWith('Thailand')// ตัวอักษรลงท้ายด้วย Thailand  ไหม true and false
  });
})
app.get('/myarray',(req , res)=>{
  let arrayData = [];
  for (let j = 0; j < 10; j++) {
    arrayData.push(
      {
        id: j,
        name: 'My Name'
      }
     
    )
  }
  res.send({results: arrayData ,size: arrayData.length});
})
app.get('/myarray2',(req , res)=>{
  let arr = [1,3,5,7,9,11,13];
  arr.map(items=>{
    console.log(items);
  });
  res.send();
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
