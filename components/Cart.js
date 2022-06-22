import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../pages';
import { AddToCartContext } from '../pages';
import fooddb from '/public/assets/json/food.json' assert {type: 'json'};
const Cart = ({ desc }) => {
    const cart = useContext(CartContext);
    const addToCart = useContext(AddToCartContext)
    const [items, setItems] = useState([]);
    const [page,setPage]=useState(cartPage)
    const [total, setTotal] = useState(0);
    const select = { boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1), 5px 3px 15px #f7e3ce00' }
    const [click, setClick] = useState(false);
    const cartPage = (<CartContext.Consumer>
        {() =>
            <AddToCartContext.Consumer>
                {() => (<div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h3>Cart</h3>
                    <div className="products-wrapper" style={{ flexDirection: 'column' }}>
                        {items}
                    </div>
                    {(cart.length > 0) ? <h2 style={{ marginBlock: '2vh' }}>Total : ₹{total}/-</h2> : ''}
                    {(cart.length > 0) ? <div className='products-wrapper' onClick={() => { setClick(!(click)) }}>
                        <img className='card-img-top' style={!(click) ? select : {}} src='https://i.imgur.com/k6buDeX.png'></img>

                        <img className='card-img-top' style={(click) ? select : {}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacXA1HPkLa792u1RiGjpjNi2iiTGeXf0Vsw&usqp=CAU'></img>
                    </div> : ''}
                    {(cart.length > 0) ? <button className='next-button' onClick={() => { window.location.href='#';setPage(confirmed) }}>Checkout</button> : ''}

                </div>)
                }
            </AddToCartContext.Consumer>
        }
    </CartContext.Consumer>)
    const confirmed=(<div className='container'>
        <h3>Your order has been placed successfully</h3>
        <img className='card-img-top' style={!(click) ? select : {}} src='https://cdn-icons-png.flaticon.com/512/1478/1478873.png'></img>   
        <span className='status-text'>OrderID: {total*3423}</span>
        <span className='status-text'>Amount: ₹{total}</span>
        <span className='status-text'>Delivery Charges: ₹{(!click)?50:0}</span>
        <span className='status-text'>GST: ₹{0.06*total}</span>
        <span className='status-text'>TOTAL: ₹{(!click)?total+50+0.06*total:total+0.06*total}</span>
        <h3>{(click)?`You have opted for pick up`:`Your order will be delivered soon!`}</h3>
    </div>)
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
                                    temp.splice(i, 1)
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
        <>{page || cartPage}</>

    );
}

export default Cart;
