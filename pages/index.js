import React, { useState } from "react";
import Cart from "../components/Cart";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";
import fooddb from '/public/assets/json/food.json' assert {type: 'json'};
export const Context = React.createContext()
export const CartContext = React.createContext()
export const AddToCartContext = React.createContext()

export default function Home() {
  const [page, setPage] = useState(<Homepage />);
  const [cart, addToCart] = useState([]);
  const [query, setQuery] = useState('');
  const renderResults = (query) => {
    if (query.length <= 0) return
    let results = []
    fooddb.map((elem, i) => {
      Object.values(elem)[0].food.forEach((e) => {
        if (e.title.toLowerCase().includes(query.toLowerCase())||e.desc.toLowerCase().includes(query.toLowerCase())) {
          results.push((<div className="card " key={results.length}>
            <img className="card-img-top"
              src={e.photo}
              alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">{`${e.desc.substring(0, 34)}...`}</p>
              <p className="card-price">{`₹${e.price}`}<a className="btn" onClick={() => {
                let newItem = [{ rid: i, pid: e.id, n: 1 }]
                let search = cart.findIndex((el => (el.rid == i && el.pid == e.id)))
                if (search >= 0) {
                  console.log(search)
                  let temp = [...cart]
                  temp[search] = { ...temp[search], n: temp[search].n + 1 }
                  addToCart(temp)
                }
                else
                  addToCart(cart.concat(newItem))
              }}>{(cart.find((el) => (i == el.rid && el.pid == e.id))) ? (cart.find((el) => (i == el.rid && el.pid == e.id)).n > 0) ? cart.find((el) => (i == el.rid && el.pid == e.id)).n : '+' : '+'}</a>
              </p>
            </div>
          </div>))
        }
      })
    });
    return (results.length>0)?results:<span style={{marginTop:'4vh',marginInline:'3vh'}}>{`No results matching to '${query}' found`}</span>
  }
  const searchDropDown = (<>
    <div className="search-dropdown">
      {renderResults(query)}
    </div>
  </>

  )
  return (
    <Context.Provider value={setPage}>
      <CartContext.Provider value={cart}>
        <AddToCartContext.Provider value={addToCart}>
          <div className="container" >
            <div className='topbar'>
              <div className="navbar-item"><img src='https://img.icons8.com/ios-filled/344/search--v1.png'></img></div>
              <input onChange={(e) => { setQuery(e.target.value) }} className='input-box' style={{ maxHeight:'6vh',margin: 0, backgroundColor: '#ffffff30', width: '100%', color: 'white' }}></input>
              {(query.length > 0) ? <div onClick={() => { setQuery('') }} style={{ borderRadius: '100%', backgroundColor: '#ffffff30', marginLeft: '3vw', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', width: '5vh', z: 1, color: 'white' }}>X</div> : ''}
              <div className="navbar-item"><img src='https://img.icons8.com/material-two-tone/344/menu--v1.png'></img></div>
            </div>
            {(query.length > 0) ? searchDropDown : ''}
            <Navbar />
            {page}
          </div>
        </AddToCartContext.Provider>
      </CartContext.Provider>
    </Context.Provider >

  )
}
