import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient();

const app = express()
app.use(express.json())
app.use(cors())


app.get('/usuarios', async (req, res) => {

    try {
    const users =  await prisma.user.findMany()

    return res.status(200).json(users)
    } catch (err) {
    return res.status(500).json({ message: 'Erro ao buscar usuários', error: err.message })
    }

});


app.post('/usuarios', async (req, res) => {

    try {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    return res.status(201).json({ message: 'Usuário criado com sucesso!', user })
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao criar usuário', error: err.message })
    }
});


app.put('/usuarios/:id', async (req, res) => {
    
    try {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao atualizar usuário', error: err.message })
    }
    res.status(200).json({ message: 'Usuário atualizado com sucesso!', user })
});


app.delete('/usuarios/:id', async (req, res) => {
    try {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    return res.status(200).json({ message: 'Usuário deletado com sucesso!' })
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao deletar usuário', error: err.message })
    }
});

app.listen(3000)
//  http://localhost:3000


/* 
    GET - Buscar uma informação dentro do servidor
    POST - Inserir uma informação dentro do servidor
    PUT - Alterar uma informação dentro do servidor
    PATCH - Alterar uma informação dentro do servidor de forma parcial
    DELETE - Deletar uma informação dentro do servidor
*/

