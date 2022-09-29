import React, { useState, useEffect, useMemo } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useSelector } from 'react-redux'

export default function Cart() {
  const [cartTotal, setCartTotal] = useState(0);
  const cart = useSelector((state) => state.cartReducer.cart);
  

  // CALCULATE CART
  const calculateCartTotal = (cart = []) => {
    if(cart.length > 0) {
        let value = 0;
        cart.map((d, i) => {
        console.log(i, Number(d.price));
            if(d.price !== null) {
                value += Number(d.price);
            }
       });
       setCartTotal(value);
    }
  };
  

  useEffect(() => {
    calculateCartTotal(cart);
  }, [cart]);

  return (
    <div className='container container-fluid'>
        <div className='page-container'>
            <div className='row listing-container'>
                <div className='col-lg-8 col-md-8'>
                <h3>
                    Cart Items ({cart.length})
                </h3>
                    <div className='row' id="listings">
                        {
                          cart.map((d, i) => <ProductCard data={d} key={i} />
                          )
                        }
                    </div>
                </div>
                <div className='col-lg-4 col-md-4'>
                    <div className='calculation'>
                        <p>Cart Estimation</p>
                        <div className='cart-estimates'>
                            <ol class="list-group list-group-numbered">
                                {
                                    cart.map((d, i) => {
                                        return (<li key={`$cart-items-${i}`} class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                        <div class="fw-bold">{d.name}</div>
                                        <p>{d.price}</p>
                                        </div>
                                        <span class="badge bg-primary rounded-pill">{d.quantity}</span>
                                    </li>)
                                    })
                                }
                            </ol>
                            <div className='price'>
                                <div className="row">
                                     <div className='col-6'>
                                          <h1 className="fw-bold">Total</h1>
                                     </div>
                                     <div className='col-6 flex'>
                                          <p style={{ fontSize: '1.4rem', margin: 0 }}>{cartTotal || 0}</p>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
