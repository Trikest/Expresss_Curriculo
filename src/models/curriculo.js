const pool = require('../models/db');

const getAll = async () => {
  try {
    const result = await pool.query('SELECT * FROM pessoa');
    return result.rows; // Adicionado `.rows` para retornar os dados em si
  } catch (error) {
    console.error('Erro ao executar query:', error);
    throw error; // Propaga o erro para o chamador
  }
};

module.exports = {
  getAll
};
