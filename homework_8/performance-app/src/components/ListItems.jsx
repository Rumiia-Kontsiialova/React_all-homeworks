import React, { useState, useEffect } from 'react'

const ListItems = () => {
  // Используйте хук useState для создания переменных состояния items (массив, хранящий элементы списка) 
  // и inputValue (строковое значение текущего ввода пользователя).
  const [items, setItems ] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Реализуйте функцию addItem, которая добавляет текущее значение inputValue в массив items и очищает inputValue.
  // if (inputValue.trim())
// Проверяется, что введённый текст не пустой:
// inputValue — это текущее значение текстового поля (например, то, что ввёл пользователь).
// .trim() — убирает пробелы в начале и в конце.
// Если после удаления пробелов строка не пуста, тогда выполняем код внутри if.
// Пример:
// Если inputValue = ' Задача 1 ', то .trim() вернёт 'Задача 1' — значит, условие выполняется.
// Если inputValue = ' ', то .trim() вернёт '' — пустую строку, и код не выполнится.

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  }

  // Добавляется новый элемент в список:
// items — это массив уже добавленных элементов.
// [...items, inputValue] — создаётся новый массив, в который копируются все старые элементы и в конец добавляется новое значение (inputValue).
// setItems(...) — обновляет список с помощью React-хука состояния (обычно useState).

useEffect(() => {
  console.log("ListItems обновлен");
}, [items]) // намеренная ошибка(избыточные вызовы)  // если здесь добавить пустой массив вместо [items] - Теперь useEffect отрабатывает только при первом рендере, что оптимально.

  return (
    <div>
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListItems