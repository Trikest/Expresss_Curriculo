const { Pool, Connection } = require('pg');  // Importar Pool e Connection

require('dotenv').config();  // Carregar variáveis de ambiente do arquivo .env

console.log(process.env.POSTGRE_HOST);
console.log(process.env.POSTGRE_PORT);
console.log(process.env.POSTGRE_USER);
console.log(process.env.POSTGRE_PASSWORD);
console.log(process.env.POSTGRE_DATA);

// Criando o pool de conexões
const pool = new Pool({
    host: process.env.POSTGRE_HOST,
    port: process.env.POSTGRE_PORT,
    user: process.env.POSTGRE_USER,
    password: process.env.POSTGRE_PASSWORD,
    database: process.env.POSTGRE_DATA,
    ssl: {
        rejectUnauthorized: false  // Desabilitar a verificação do certificado (use com cautela em produção)
    }
});

// Exportando o pool de conexões
module.exports = pool;
