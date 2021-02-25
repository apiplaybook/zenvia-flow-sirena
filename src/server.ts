import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

// Inicializa o express e define uma porta
const app = express()

// Indica para o express usar o JSON parsing do body-parser
app.use(bodyParser.json())

// Indica para o express usar o as rotas do arquivo routes
app.use(routes)

// Indica para o express escutar a porta 4000
app.listen(4000, () => console.log(`Server running on port 4000`))
