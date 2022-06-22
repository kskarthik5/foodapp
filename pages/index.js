import React, { useState } from "react";
import Cart from "../components/Cart";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";
export const Context = React.createContext()
export const CartContext = React.createContext()
export const AddToCartContext = React.createContext()
export default function Home() {
  const [page, setPage] = useState(<Homepage />);
  const [cart, addToCart] = useState([]);
  return (
    <Context.Provider value={setPage}>
      <CartContext.Provider value={cart}>
        <AddToCartContext.Provider value={addToCart}>
          <div className="container" >
            <div className='topbar'>
              <div className="navbar-item"><img src='https://img.icons8.com/ios-filled/344/search--v1.png'></img></div>
              <div style={{ width: '80%' }}></div>
              <div className="navbar-item"><img src='https://img.icons8.com/material-two-tone/344/menu--v1.png'></img></div>
            </div>
            <Navbar />

            {page}
          </div>
        </AddToCartContext.Provider>
      </CartContext.Provider>
    </Context.Provider >

  )
}
