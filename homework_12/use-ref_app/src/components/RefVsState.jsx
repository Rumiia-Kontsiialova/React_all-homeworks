import { useState, useRef } from 'react'

const RefVsState = () => {
    const [stateCount, setStateCount] = useState(0)
    const refCount = useRef(null)

    const handleClick = () => {
        setStateCount(stateCount + 1)
        refCount.current += 1
        console.log(refCount)
    }
  return (
    <div>
        <h1>Разница между useState и useRef</h1>
        <button onClick={handleClick}>Сравнить</button>
        <p>Состояние (useState): {stateCount} </p>
        <p>Состояние (useRef): {refCount.current} </p>
    </div>
  )
}

export default RefVsState