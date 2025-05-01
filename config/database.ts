export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      host: env('PGHOST', 'localhost'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false) ? {
        rejectUnauthorized: false
      } : false,
    },
    pool: {
      min: 2,
      max: 10
    },
    acquireConnectionTimeout: 50000
  }
});