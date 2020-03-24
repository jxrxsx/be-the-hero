const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

 /**
  * Tipos de parâmetros
  * 
  * Query params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação, etc)
  *   > request.query; => /users/name=Jon
  * Route params: Parâmetros utilziados para identificar recursos (de um único usuário Ex: :id)
  *   > request.params; => /users/1
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */


app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'mayuzera b.o da zl'
  });
});

app.listen(3333);