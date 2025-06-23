import React from 'react'

const CarsList = () => {
    const cars = ['Mercedes', 'BMW', 'Volkswagen']
  return (
    <ol>
        {
            cars.map(car => <li>{car}</li>)
        }
    </ol>
  )
}

export default CarsList