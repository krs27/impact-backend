"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('APP_KEYS'),
    },

    https: {
        enabled: true,
        key: env('SSL_KEY_PATH'),
        cert: env('SSL_CERT_PATH'),
      }, 
});
