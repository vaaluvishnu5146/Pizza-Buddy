import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Slider from '../../Components/Slider/Slider'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteItem } from '../../Redux/slice/cart.slice'; // RELATIVE IMPORT
import axios from 'axios';
import { addPizzaList } from '../../Redux/slice/pizza.slice';

export default function ListingPage() {
  const [banners, setBanners] = useState([]);
  const pizzas = useSelector((state) => state.pizzaReducer.pizzas)
  const cart = useSelector((state) => state.cartReducer.cart)

  // HOOKS
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = async () => {
    await axios.get('http://localhost:5000/api/pizzas').then((response) => {
      const { message = '', pizzas = [] } = response.data;
      if(message !== '' && message !== null) {
        dispatch(addPizzaList(pizzas));
      }
    }).catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
    setBanners([
        "https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-sm.d8bfb0c0846bfc9d8f18dfb78a3393da.jpg",
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/1-plus-1-san-francisco-style.14b759cca136012aa516655b1f416793.1.jpg",
        "https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/hut-treat-box-4-san-francisco-style.bce53c185b089aaef9bfeedb0a27d79a.1.jpg"
    ]);
    return () => {
    }
  }, []);

  const addItemToCart = (data) => {
    if(data.id) {
        const cartCopy = Object.assign({}, data);
        cartCopy.quantity = 1;
        dispatch(addToCart(cartCopy));
    }          
  };

  const navigateToCart = () => {
    navigate("/cart");
  };
  
  return (
    <div>
        <Navbar cartCount={cart.length || 0} navigateTo={navigateToCart}/>
        <Slider banners={banners || []} />
        {/* // BANNERS
        // LISTINGS
        // FOOTER */}
        <div className='mb-5'></div>
        <div className="container container-fluid">
            <div className='row'>
                {
                    pizzas && pizzas.length > 0 ? pizzas.map((d, i) => <ProductCard data={d} key={i} add={addItemToCart}/>
                    ) : <p>Sorry we dont server any product</p>
                }
            </div>
        </div>
    </div>
  )
}
