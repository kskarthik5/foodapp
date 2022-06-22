import {useEffect,useState,useContext} from 'react';
import ProductList from './ProductList';
import fooddb from '/public/assets/json/food.json' assert {type: 'json'};
import { Context } from '../pages';
import Restaurant from './Restaurant';
const Homepage = () => {
  const setPage = useContext(Context);
    const select={ color: "#FFFFFF", fontSize:'3vh', fontWeight:'700' }
    const [outlet,setOutlet]=useState(0);
    const [products,setProducts] = useState();
    useEffect(() => {
      setProducts(<ProductList rid={outlet} style={{marginTop:'-4vh'}}/>)
    }, [outlet]);
    return (
        <>
        <h3>Try out our bestsellers!</h3>
        <div className='bestsellers'>
          <div className="card ">
            {/* <div className="calories">
                  <span className="text">
                    144 Calories
                  </span>
                </div> */}
            <img className="card-img-top pizza"
              src="https://w7.pngwing.com/pngs/56/985/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail.png"
              alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Mexico</h5>
              <p className="card-text">Mixed Pizza with Pineapple</p>
              <p className="card-price">$15,99 <a href="#" className="btn">+</a></p>
            </div>
          </div>
        </div>
    
        <h3 style={{marginBottom:"-4vh"}}>Food Outlets</h3>
        <div className="tabs">
          <ul>
            <li style={outlet==0?select:{}} onClick={()=>{setOutlet(0)}}>McDonalds</li>
            <li style={outlet==1?select:{}} onClick={()=>{setOutlet(1)}}>KFC</li>
            <li style={outlet==2?select:{}} onClick={()=>{setOutlet(2)}}>Theatre</li>
          </ul>
        </div>
    
        {products}
        <p style={{marginLeft:'15vh',color:'#efefef',fontSize:'2vh',fontFamily:'inherit',padding:'2vh',cursor:'pointer'}} onClick={()=>{window.location.href="#";setPage(<Restaurant rid={outlet}/>)}}>MORE FROM {(Object.keys(fooddb[outlet]))[0].toUpperCase()+'>'}</p>
        
        <h3>Order Again</h3>
        <div className="products-wrapper">
          <div className="card ">
            {/* <div className="calories">
                  <span className="text">
                    144 Calories
                  </span>
                </div> */}
            <img className="card-img-top pizza"
              src="https://drive.google.com/u/0/uc?id=1ZAjDdaTtouB_jSZFabaGQlwwPq1ODw3G&export=download"
              alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Mexico</h5>
              <p className="card-text">Mixed Pizza with</p>
              <p className="card-price">$15,99 <a href="#" className="btn">+</a></p>
    
            </div>
          </div>
          <div className="card ">
            <img className="card-img-top pizza"
              src="https://drive.google.com/u/0/uc?id=1C4O5AVyOH4BVPDMd4bhjrb_pnjUZdZqm&export=download"
              alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Clasico</h5>
              <p className="card-text">Mixed Pizza with cheese</p>
              <p className="card-price">$7,99 <a href="#" className="btn">+</a></p>
    
            </div>
          </div>
          <div className="card ">
            <img className="card-img-top pizza"
              src="https://drive.google.com/u/0/uc?id=1ZAjDdaTtouB_jSZFabaGQlwwPq1ODw3G&export=download"
              alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Mexico</h5>
              <p className="card-text">Mixed Pizza with</p>
              <p className="card-price">$15,99 <a href="#" className="btn">+</a></p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Homepage;
