const fs = require('fs')

fs.readFile('teste.txt','utf8',(err, dados)=>{
    if(err)
        console.error(err)
    else
        console.log(dados);
})