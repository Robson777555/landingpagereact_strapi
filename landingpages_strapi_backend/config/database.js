module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'), // Host do Neon
      port: env.int('DATABASE_PORT', 5432), // Porta padrão do PostgreSQL
      database: env('DATABASE_NAME'), // Nome do banco de dados
      user: env('DATABASE_USERNAME'), // Usuário do banco de dados
      password: env('DATABASE_PASSWORD'), // Senha do banco de dados
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL', true), // SSL é necessário para o Neon
      },
    },
    debug: false,
  },
});