import React from 'react'

const OrderStatus = ({ orderId, status }) => {
  return (
    <div>
        <p>Заказ #{orderId}: {status}</p>
    </div>
  )
}

export default OrderStatus