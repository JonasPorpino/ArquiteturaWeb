// Funções Assíncronas com Async e Await
const fs = require('fs/promises')

const lerarq = async() => {
    try{

        const dasdos = await fs.readFile('teste.txt','utf8');
        return dasdos;
    }catch(err){
        console.log(err);
        return "sem arquivo"
    }
}

// lerarq().then((x)=>console.log(x));

const f1 = (a,b) => a+b;

const f2 = async(a,b) => {return f1(a,b)};

f2(1,2).then((x)=>console.log(x));
