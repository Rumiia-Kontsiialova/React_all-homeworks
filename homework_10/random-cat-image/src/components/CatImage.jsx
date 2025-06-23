import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from '../styles/CatImage.module.css'

const CatImage = () => {
  const [ catImage, setCatImage ] = useState('')
 
  const fetchCatImage = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatImage(response.data[0].url)
    } catch (error) {
      console.error('Ошибка при загрузке', error)
    }
  };

   // Используйте `useEffect` для загрузки изображения при монтировании компонента.
   useEffect(() => {
    fetchCatImage();
   }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.titel}>Random Cat Image</h1>
      {catImage && <img className={styles.image} src={catImage} alt='RandomCat' />}
      <br/>
      <button onClick={fetchCatImage} className={styles.btn}>Load New Image</button>
    </div>
  )
}

export default CatImage


//  1. const fetchCatImage = async () => { ... }
// Объявляется асинхронная функция fetchCatImage.

// Ключевое слово async говорит, что внутри можно использовать await.

// 2. try { ... } catch (error) { ... }
// Блок try...catch нужен для обработки ошибок.

// Внутри try — основной код.

// В catch — что делать, если возникнет ошибка (например, нет интернета или сервер не ответил).

//  3. const response = await axios.get('https://api.thecatapi.com/v1/images/search');
// axios.get(...) делает GET-запрос на сайт с API картинок кошек.

// await приостанавливает выполнение функции, пока не придёт ответ от сервера.

// response — это объект, содержащий ответ сервера.

//  4. setCatImage(response.data[0].url)
// response.data — это массив с одной картинкой.

// [0] — берём первый элемент массива.

// .url — получаем ссылку на изображение.

// setCatImage(...) — сохраняем URL картинки в состоянии (чтобы React отрисовал её на странице).

//  5. catch (error) { console.error(...) }
// Если что-то пошло не так (например, нет ответа от сервера),

// Выводится сообщение об ошибке в консоль:
// "Ошибка при загрузке", error

// ✅ Что делает функция в итоге:
// Отправляет запрос на сервер TheCatAPI.

// Получает ссылку на случайную картинку кошки.

// Сохраняет эту ссылку в состояние (чтобы показать изображение на экране).

// Если произошла ошибка — сообщает об этом в консоли.