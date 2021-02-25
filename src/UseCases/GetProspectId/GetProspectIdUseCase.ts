import { api } from '../../config/api'
import { config } from 'dotenv'

// Inicialização do dotenv
config()

export class GetProspectIdUseCase {
	async execute(tel: string): Promise<string> {
		// Consulta as Prospects
		const { data } = await api.get(`/prospects?api-key=${process.env.API_TOKEN}`)

		// Verifica se existe Prospects
		if (data) {
			// Procura a prospect com o número de celular informado
			const prospect = data.filter((prospect) => prospect.phones.includes(tel))[0]

			// Se existe
			if (prospect) {
				// Retorna o ID da Prospect
				return prospect.id
			} else {
				// Retorna erro
				throw new Error('Não há nenhuma prospecção com este número de celular.')
			}
		} else {
			// Retorna erro
			throw new Error('Não há nenhuma prospecção.')
		}
	}
}
