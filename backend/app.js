const express = require('express')
const cors = require('cors')
const app = express()

taskList = [
    {
        title: 'tarefa X',
        done: true,
        description: 'tarefa teste X'
    },
    {
        title: 'tarefa Y',
        done: false,
        description: 'tarefa teste Y'
    },
    {
        title: 'tarefa Z',
        done: true,
        description: 'tarefa teste Z'
    },
    {
        title: 'tarefa 00',
        done: true,
        description: 'tarefa teste Z'
    }
]

app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Lista de Tarefas</h1>')
})

app.get('/json', (req, res) => {
    res.json(taskList)
})


app.listen(3000, ()=>{
    console.log('Servidor Iniciado')
})