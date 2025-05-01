"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            // Primary connection method - use DATABASE_URL
            connectionString: env('DATABASE_URL'),
            // Fallback to individual variables if DATABASE_URL not available
            host: env('PGHOST'),
            port: env.int('PGPORT'),
            database: env('DATABASE_CLIENT'),
            user: env('PGUSER'),
            password: env('PGPASSWORD'),
            // Required SSL settings for Railway
            ssl: {
                rejectUnauthorized: false // Railway uses self-signed certificates
            }
        },
        pool: {
            min: 2,
            max: 10
        },
        acquireConnectionTimeout: 50000
    }
});
