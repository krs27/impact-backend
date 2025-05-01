"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('APP_KEYS', [
            'myKeyA', // Replace with secure keys
            'myKeyB', // Or use environment variables
        ]),
    },
    emitErrors: false,
    timeout: 30000, // 30 seconds
});
