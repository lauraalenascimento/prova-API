const express = require('express')
const exphbs = require('express-handlebars')
const db = require('./db/conn')

const PORT = 3334
//Importar o módulo conn para as operações com o banco

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))
//Middleware para arquivos estáticos



app.get('/', (request, response)=>{
  return response.render('home')
})
app.get('/cadastro',(req,res)=>{
  const livro = ('title','category','descri','preco','quanti',title,category,descri,preco,quanti)
  Conn.query(`INSERT INTO livro `)


  console.log('cadastro', {cadastro})
})

app.post('/cadastro',(req,res)=>{
  conn.query(`SELECT * FROM tb_livros`)
  console.log('cadastro')
})


app.listen(PORT, ()=>{
  console.log(`Servidor rodando na porta ${PORT}`)
})

