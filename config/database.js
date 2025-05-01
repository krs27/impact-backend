const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      // Primary connection method - use DATABASE_URL
      connectionString: env('DATABASE_URL'),

      // Fallback to individual environment variables if DATABASE_URL is not available
      host: env('PGHOST', 'localhost'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', ''),

      // Required SSL settings for Railway
      ssl: env.bool('DATABASE_SSL', true)
        ? {
            rejectUnauthorized: false, // Railway uses self-signed certificates
          }
        : false,
    },
    pool: {
      min: 2,
      max: 10,
    },
    acquireConnectionTimeout: 50000,
  },
});