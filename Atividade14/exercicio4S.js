const fs = require('fs'); //carregando modulo filesystem
const data = fs.readFileSync('file.txt');
//a execucao é bloqueada aqui ate o arquivo ser lido
console.log(data.toString());