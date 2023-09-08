const mysql = require('mysql2')

//Configuração e conexão com banco
const conn = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  port: '336', // É opcional.
  user: 'aluno_medio',
  password: '@lunoSenai23.',
  database: 'livro',
})

// É necessário exporta esse modulo

