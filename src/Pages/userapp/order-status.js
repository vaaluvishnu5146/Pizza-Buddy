import React from 'react'

export default function OrderStatus() {
  return (
    <div className='container continer-fluid'>
        <div className='page-container flex'>
            <div className='order-status-card' id="order-status-card">
                 <div className='status-circle'>
                 </div>
                 <div className='status-container'>
                     <h2>Order created successfully</h2>
                     <p>Order id: asdsd </p>
                     <h3>Order delivered by:</h3>
                     <p>Test guy</p>
                     <h3>Estimated delivery time</h3>
                     <p>30mins</p>
                 </div>
            </div>
        </div>
    </div>
  )
}
