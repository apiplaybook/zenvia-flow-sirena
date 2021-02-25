import { Request, Response } from 'express'
import { createLeadUseCase } from './'

export class CreateLeadController {
	async handle(request: Request, response: Response): Promise<Response> {
		// Armazena os parâmetros de consulta em variáveis
		const { username, tel, comments } = request.query

		// Validações dos parâmetros
		if (
			username === undefined ||
			typeof username !== 'string' ||
			tel === undefined ||
			typeof tel !== 'string' ||
			comments === undefined ||
			typeof comments !== 'string'
		) {
			return response.status(400)
		}

		// Organização do nome
		const name = username.split(' ')
		const fullName = {
			firstName: name[0],
			lastName: name[name.length - 1],
		}

		// Tente
		try {
			// Criar o Lead
			await createLeadUseCase.execute({
				firstName: fullName.firstName,
				lastName: fullName.lastName === fullName.firstName ? '' : fullName.lastName,
				tel: `+55${tel}`,
				comments,
			})

			// Retorna status 201 (Created)
			return response.status(201).send()
		} catch (err) {
			// Em caso de erro, retorne o erro
			return response.status(400).json({
				message: err.message || 'Unexpected error.',
			})
		}
	}
}
