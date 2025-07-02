import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandomQuote } from '../features/quote/quoteSlice';

const Quote = () => {
    // В этом компоненте используйте `useDispatch` и `useSelector` из `react-redux` для отправки асинхронного действия и доступа к состоянию.
    const dispatch = useDispatch();
    const { text, author, status, error } = useSelector((state) => state.quote )

    // при первом рендере компонента выполните запрос для получения случайной цитаты с помощью `useEffect`.
    useEffect(() => {
        dispatch(fetchRandomQuote())
    }, [])

    // Создайте функцию-обработчик для загрузки новой цитаты при нажатии на кнопку.
    const handleNewQuote = () => {
        dispatch(fetchRandomQuote())
    }

  return (
    <div>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'succeeded' && (
            <div>
            <p>"{text}"</p>,
            <p>{author}</p>
            </div>
        )}
        {status === 'failed' && <p>{error}</p>}
        <button onClick={handleNewQuote}>New Quote</button>
    </div>
  )
}

export default Quote