// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var sum = require('../../../Downloads/_b9ed55d7d4818ad10e9ece82eae2ef0d_exercise/index.js');

assert.equal(sum(12, 33), 45, 'При сложении 12 и 33 получится 45');
assert.equal(sum(101, '17'), 118, 'При сложении 101 и 17 получится 118');

console.info('OK!');
