# zenvia-voice-sirena

Este repositório contem a aplicação criada no artigo tutorial da [Prensa.li](https://prensa.li/) sobre como [Unindo Zenvia Flow e Sirena em uma aplicação funcional](https://prensa.li/zenvia/unindo-zenvia-flow-e-sirena-em-uma-aplicacao-funcional/).

Esta aplicação é responsável por fazer a integração entre o Zenvia Flow e a Sirena, logo para que ela funcione corretamente, você deve ter um fluxo criado na Zenvia que envie as informações conforme descritas no [tutorial](https://prensa.li/zenvia/unindo-zenvia-flow-e-sirena-em-uma-aplicacao-funcional/) e uma aplicação criada na Sirena para conseguir a API KEY, que permite a utilização da API Sirena.

## Como executar

### Cofiguração inicial

Visite o tutorial para ter uma visão geral da aplicação e saber configurar corretamente os ambientes.

Para executar esta aplicação você precisa fazer o cadastro no [site da Sirena e configurar a aplicação](https://www.totalvoice.com.br/signup.php). Após configurar sua aplicação Sirena,é possível adquirir a _API KEY_ para se autenticar nas requisições à API.

Com a _API KEY_ em mãos, renomeie o arquivo [`.env.example`](./.env.example) para `.env` e coloque o token na variável `API_TOKEN`.

### Requisitos

- [node.js](https://nodejs.org/en/download/) 8 ou versão superior
- [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) (opcional, mas recomendado)

### Executando o projeto

Clone o projeto

```bash
git clone https://github.com/apiplaybook/zenvia-flow-sirena.git
```

Após clonar o projeto, dentro da pasta do mesmo, execute:

```bash
npm run dev
```

ou (se tiver o yarn instalado)

```bash
yarn dev
```
