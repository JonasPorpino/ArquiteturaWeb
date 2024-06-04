 const https= require('https');

 https.get('https://viacep.com.br/ws/01001000/json/',(dados)=>{
    console.log(dados);
 })