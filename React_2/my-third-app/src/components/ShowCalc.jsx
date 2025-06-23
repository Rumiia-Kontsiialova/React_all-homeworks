import React from 'react'
import { multiply, devide } from '../utils/UsefulFunction'

const ShowCalc = () => {
    return (
        <div>
            <h1>Результат умножения: {multiply(2,3)}</h1>
            <h1>Результат деления: {devide(6,2)}</h1>
        </div>
    )
}
export default ShowCalc