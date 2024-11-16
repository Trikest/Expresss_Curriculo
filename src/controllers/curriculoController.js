const curriculo = require('../models/curriculo');

const getAll = async (request, response) => {
  try {
    // Chama a função do modelo para obter todos os dados de currículos
    const curriculoPrin = await curriculo.getAll();
    
    // Retorna os dados com status 200 (OK)
    return response.status(200).json(curriculoPrin);
  } catch (error) {
    // Log de erro no servidor
    console.error('Erro ao buscar dados:', error);

    // Retorna uma resposta de erro com status 500 (erro interno do servidor)
    return response.status(500).json({
      message: 'Erro ao buscar dados',
      error: error.message
    });
  }
};

module.exports = {
  getAll
};
