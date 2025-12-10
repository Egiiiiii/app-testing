// simple-app/eslint.config.js
// Konfigurasi dasar ESLint untuk Node.js
const globals = require("globals");
const js = require("@eslint/js");

module.exports = [
  // Standar rekomendasi ESLint
  js.configs.recommended,
  {
    languageOptions: {
      // Tentukan lingkungan dan parser yang digunakan
      globals: {
        ...globals.node, // Aktifkan variabel global Node.js (seperti 'module', 'require')
      },
      sourceType: "module",
    },
    rules: {
      // Tambahkan aturan kustom atau sesuaikan di sini
      "indent": ["error", 2],
      "semi": ["error", "always"],
      "no-unused-vars": "warn",
    },
  },
];