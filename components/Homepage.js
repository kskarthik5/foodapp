import { useEffect, useState, useContext } from 'react';
import ProductList from './ProductList';
import fooddb from '/public/assets/json/food.json' assert {type: 'json'};
import { Context } from '../pages';
import { AddToCartContext } from '../pages';
import { CartContext } from '../pages';
import Restaurant from './Restaurant';
const Homepage = () => {
  const setPage = useContext(Context);
  const select = { color: "#FFFFFF", fontSize: '3vh', fontWeight: '700' }
  const [outlet, setOutlet] = useState(0);
  const [products, setProducts] = useState();
  const cart = useContext(CartContext);
  const addToCart = useContext(AddToCartContext);
  let rid=1
  let pid=3
  let e = Object.values(fooddb[rid])[0].food[pid];
  useEffect(() => {
    setProducts(<ProductList rid={outlet} style={{ marginTop: '-4vh' }} />)
  }, [outlet]);
  return (
    <CartContext.Consumer>
      {() =>
        <AddToCartContext.Consumer>
          {() => {
            return (
              <>
                <h3>Try out our bestsellers!</h3>
                <div className='bestsellers'>
                  <div className="card " key={e.id}>
                    <img className="card-img-top"
                      src={e.photo}
                      alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">{e.title}</h5>
                      <p className="card-text">{`${e.desc.substring(0, 34)}...`}</p>
                      <p className="card-price">{`₹${e.price}`}<a className="btn" onClick={() => {
                        let newItem = [{ rid: rid, pid: e.id, n: 1 }]
                        let search = cart.findIndex((el => (rid == el.rid && el.pid == e.id)))
                        if (search >= 0) {
                          console.log(search)
                          let temp = [...cart]
                          temp[search] = { ...temp[search], n: temp[search].n + 1 }
                          addToCart(temp)
                        }
                        else
                          addToCart(cart.concat(newItem))
                      }}>{(cart.find((el) => (rid == el.rid && el.pid == e.id))) ? (cart.find((el) => (rid == el.rid && el.pid == e.id)).n > 0) ? cart.find((el) => (rid == el.rid && el.pid == e.id)).n : '+' : '+'}</a>
                      </p>
                    </div>
                  </div>
                </div>

                <h3 style={{ marginBottom: "-4vh" }}>Food Outlets</h3>
                <div className="tabs">
                  <ul>
                    <li style={outlet == 0 ? select : {}} onClick={() => { setOutlet(0) }}>McDonalds</li>
                    <li style={outlet == 1 ? select : {}} onClick={() => { setOutlet(1) }}>KFC</li>
                    <li style={outlet == 2 ? select : {}} onClick={() => { setOutlet(2) }}>Theatre</li>
                  </ul>
                </div>

                {products}
                <p style={{ display:'flex',justifyContent:'flex-end',fontWeight:'700',marginLeft: '10vh', color: '#efefef', fontSize: '2vh', fontFamily: 'inherit', padding: '2vh', cursor: 'pointer' }} onClick={() => { window.location.href = "#"; setPage(<Restaurant rid={outlet} />) }}>MORE FROM {(Object.keys(fooddb[outlet]))[0].toUpperCase() + '>'}</p>

                <h3>Order Again</h3>
                <ProductList rid={2} style={{}} />
              </>
            )
          }}
        </AddToCartContext.Consumer>
      }
    </CartContext.Consumer>
  );
}

export default Homepage;
