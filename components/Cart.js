import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../pages';
import { AddToCartContext } from '../pages';
import fooddb from '/public/assets/json/food.json' assert {type: 'json'};
const Cart = ({ desc }) => {
    const cart = useContext(CartContext);
    const addToCart = useContext(AddToCartContext)
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if (cart.length == 0) {
            setItems(<h2 style={{ marginBlock: '5vh', color: 'gray' }}>Your Cart is Empty</h2>)
            return
        }
        let newTotal = 0
        let temp = cart.map((el, i) => {
            let e = Object.values(fooddb[el.rid])[0].food[el.pid - 1]
            return <div className="card " key={e.id}>
                <img className="card-img-top"
                    src={e.photo}
                    alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">{(desc) ? e.desc : `${e.desc.substring(0, 34)}...`}</p>
                    <p className="card-price">{`₹${e.price}`}
                        <a className="btn" onClick={
                            () => {
                                let temp = [...cart]
                                temp[i] = { ...temp[i], n: temp[i].n + 1 }
                                addToCart(temp)
                            }
                        }>+</a>
                        <a className="btn" >{el.n}</a>
                        <a className="btn" onClick={
                            () => {
                                if (el.n == 1) {
                                    let temp = [...cart]
                                    temp.splice(i,1)
                                    addToCart(temp)
                                }
                                else {
                                    let temp = [...cart]
                                    temp[i] = { ...temp[i], n: temp[i].n - 1 }
                                    addToCart(temp)
                                }
                            }
                        }>-</a>
                    </p>
                </div>
            </div>
        })
        cart.map((el, i) => {
            let e = Object.values(fooddb[el.rid])[0].food[el.pid - 1]
            newTotal = newTotal + (e.price * el.n)
        })
        setTotal(newTotal)
        setItems(temp)
    }, [cart]);
    return (
        <CartContext.Consumer>
            {() =>
                <AddToCartContext.Consumer>
                    {() => (<div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <h3>Cart</h3>
                        <div className="products-wrapper" style={{ flexDirection: 'column' }}>
                            {items}
                        </div>
                        {(cart.length > 0) ? <h3>Total : ₹{total}/-</h3> : ''}
                        {(cart.length > 0) ? <button className='next-button'>Checkout</button> : ''}

                    </div>)
                    }
                </AddToCartContext.Consumer>
            }
        </CartContext.Consumer>
    );
}

export default Cart;
