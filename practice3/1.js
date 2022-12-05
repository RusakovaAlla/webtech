// 1. Необходимо создать html-страницу с названием 1.html, в которой подключить файл 1.js (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо создать следующий скрипт:
// Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): 
// Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Примечания: Пользователь всегда вводит корректное число.
// Советую округлить значение после рассчетов, так как в некоторых случаях может получиться "длинная дробь".

function convertToFarengheit(){
    let temperature = Number.parseFloat(prompt("Введите показания в градусах Цельсия")); //сознательно взяла let, а не const, т.к. скрипт хотела подвесить к кнопке и запускать по нажатию
    convTMPR = Number.parseFloat((9/5 * temperature + 32)).toFixed(1);
    message = temperature+'\xB0C is ' + convTMPR + ' \xB0F.';
    alert(`${temperature}\xB0C это ${convTMPR}\xB0F`);
    return convTMPR;
}
