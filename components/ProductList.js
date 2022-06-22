import { useContext } from 'react';
import fooddb from '/public/assets/json/food.json' assert {type: 'json'};
import { AddToCartContext } from '../pages';
import { CartContext } from '../pages';
const ProductList = ({ rid, style, desc }) => {
  const cart = useContext(CartContext);
  const addToCart = useContext(AddToCartContext);
  const list = Object.values(fooddb[rid])[0].food.map((e, i) => {
    return (<div className="card " key={e.id}>
      {/* <div className="calories">
              <span className="text">
                144 Calories
              </span>
            </div> */}
      <img className="card-img-top"
        src={e.photo}
        alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{e.title}</h5>
        <p className="card-text">{(desc) ? e.desc : `${e.desc.substring(0, 34)}...`}</p>
        <p className="card-price">{`₹${e.price}`}<a className="btn" onClick={() => {
          let newItem = [{ rid: rid, pid: e.id, n: 1 }]
          let search = cart.findIndex((el => (rid == el.rid && el.pid == e.id)))
          if (search>=0) {
            console.log(search)
            let temp = [...cart]
            temp[search] = { ...temp[search], n: temp[search].n + 1 }
            addToCart(temp)
          }
          else
            addToCart(cart.concat(newItem))
        }}>{(cart.find((el) => (rid == el.rid && el.pid == e.id)))?(cart.find((el) => (rid == el.rid && el.pid == e.id)).n>0)?cart.find((el) => (rid == el.rid && el.pid == e.id)).n:'+':'+'}</a>
        </p>
      </div>
    </div>)
  })
  return (
    <CartContext.Consumer>
      {() =>
        <AddToCartContext.Consumer>
          {() => {
            return (
              <div className="products-wrapper" style={style}>
                {list}
              </div>
            )
          }}
        </AddToCartContext.Consumer>
      }
    </CartContext.Consumer>
  );
}

export default ProductList;
