import React from 'react'

const RandomPharse = () => {
    const pharses = [
            'Учись, пока другие спят!', 
            'React — это весело!', 
            'Код — это поэзия.', 
            'Ошибки — это ступеньки к успеху.', 
            'Дорогу осилит идущий.'
    ]

    const randomIndex = Math.floor(Math.random() * pharses.length)
    // console.log(randomIndex)
    const RandomPharse = pharses[randomIndex]
    // console.log(RandomPharse)
    return <div>{RandomPharse}</div>
}
export default RandomPharse