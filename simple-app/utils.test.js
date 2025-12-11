// simple-app/utils.test.js

// 1. Import module atau fungsi yang ingin diuji
const { multiply } = require('./utils'); 

// 2. Gunakan fungsi 'describe' untuk mengelompokkan test (opsional)
describe('Testing utility functions', () => {

    // 3. Gunakan fungsi 'test' atau 'it' untuk mendefinisikan kasus uji spesifik
    test('it should multiply two positive numbers correctly', () => {
        // Arrange: Siapkan input
        const num1 = 5;
        const num2 = 4;

        // Act: Jalankan fungsi yang diuji
        const result = multiply(num1, num2);

        // Assert: Verifikasi hasil menggunakan fungsi 'expect' dari Jest
        expect(result).toBe(20); 
    });

    test('it should handle zero input', () => {
        const result = multiply(10, 0);
        expect(result).toBe(0);
    });

    // Tambahkan test lain di sini jika diperlukan
});