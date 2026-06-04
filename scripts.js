const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.button');

let currentExpression = ''; // Текущее выражение

// button в данном случае будет передаваться СОБЫТИЕ НАЖАТИЕ, где можно будет узнать кнопку по которой нажали через target и из которой можно будет доставать её значение
function handleButton(button) {
    const value = button.target.textContent; // Получаем текст кнопки (например, "5", "+")

    // Обработка разных типов кнопок
    if (value === '=') {
      // Вызов функции вычисления
    } else if (value === 'C') {
      // Очистка дисплея
    } else {
      // Добавляем значение к текущему выражению
      // Изменение HTML элемента на экране на текущее значение
    }
  });
}

// Для каждой кнопки добавляем обработчик клика
buttons.forEach(button => {
  button.addEventListener('click', handleButton);