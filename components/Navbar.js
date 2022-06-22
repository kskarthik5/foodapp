import React, { useContext } from 'react';
import Cart from "../components/Cart";
import Homepage from "../components/Homepage";
import { Context } from '../pages';
import { CartContext } from '../pages';
const Navbar = () => {
    const setPage = useContext(Context);
    const cart = useContext(CartContext);
    return (
        <Context.Consumer>
            {() => {
                return (
                    <>
                        <div className='navbar'>
                            <div className='navbar-item' onClick={() => {
                                window.location.href="#";
                                setPage(<Homepage />)
                            }}>
                                <img src='https://img.icons8.com/glyph-neue/344/home.png'></img>
                            </div>
                            <div className='navbar-item' onClick={() => {
                                window.location.href="#";
                                setPage((<Cart />))
                            }}>
                                <img src='https://img.icons8.com/ios-glyphs/344/shopping-cart-loaded.png'></img>
                                {(cart.length>0)?<div className='cart-indicator'></div>:''}
                            </div>
                            <div className='navbar-item'>
                                <img src='https://img.icons8.com/ios-glyphs/344/test-account.png'></img>
                            </div>
                            <div className='navbar-item' onClick={() => {
                            }}>
                                <img src='https://img.icons8.com/ios-filled/344/chat--v1.png'></img>                     
                            </div>
                        </div>
                        <div className='navbar-gradient'></div>
                    </>
                )
            }}
        </Context.Consumer>
    );
}

export default Navbar;
