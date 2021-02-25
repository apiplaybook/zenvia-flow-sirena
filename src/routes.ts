import express, { Request, Response } from 'express'

// Inicialização do Router do express
const routes = express.Router()

// Declaração da rota /send/message que usaremos na aplicação
routes.post('/send/message', (request: Request, response: Response) => {
	console.log('Funcionando!')
	return response.status(200).json({ mesage: 'Funcionando!' })
})

export default routes
