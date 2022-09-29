import React from 'react'
import cart from '../../images/cart.png'

export default function Navbar({ cartCount = 0, navigateTo = () => {} }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Pizza Buddy</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="#">Pizzas</a>
            </li>
        </ul>
            <div className='options' style={{ position: 'relative' }}>
                <img style={{ cursor: 'pointer' }} src={cart} onClick={navigateTo} />
                <span style={{
                    position: 'absolute',
                    width: 25,
                    height: 25,
                    background: 'rgb(220, 53, 69)',
                    borderRadius: '50%',
                    color: '#ffffff',
                    top: 0,
                    right: -15,
                }}>{cartCount}</span>
            </div>
        </div>
    </div>
    </nav>
  )
}
