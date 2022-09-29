import React, { useState, useEffect } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useSelector } from 'react-redux'

export default function Cart() {

  const cart = useSelector((state) => state.cartReducer.cart);
  

  return (
    <div className='container container-fluid'>
        <div className='cart-container'>
            <h3>
                Cart Items{cart.length}
            </h3>
            <div className='row'>
                <div className='col-lg-8 col-md-8'>
                    <div className='row' id="listings">
                        {
                          cart.map((d, i) => <ProductCard data={d} key={i} />
                          )
                        }
                    </div>
                </div>
                <div className='col-lg-4 col-md-4'>
                    <div className='calculation'>
                        <p>calculation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
