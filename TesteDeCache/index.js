const express = require('express')
app = express()

app.get('setcookie',(req,res)=>{
    res.cookie(`Acessado em ${new Date()}`);
    res.send('Cookie salvo');
});

app.listen(3000,()=>console.log('servidor executando'));