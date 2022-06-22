import React from 'react';
import ProductList from './ProductList';
import fooddb from '/public/assets/json/food.json' assert {type: 'json'};
const Restaurant = ({rid}) => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width:'100vw',paddingInline:'5%',background:'linear-gradient( rgba(10, 10, 99, 0.4) 0%, rgba(100, 100, 100, 0.4) 100%)' }}>
                <div style={{ display: 'flex', alignItems:'flex-start', justifyContent: 'center',flexDirection:'column',maxWidth:'70%' }}>
                    <h2>{Object.keys(fooddb[rid])[0].toUpperCase()}</h2>
                    <span>4 km away</span>
                    <span>Rating: </span>
                    <span>Estimated delivery time : </span>
                </div>
                <img className='res-img' src={Object.values(fooddb[rid])[0].img}></img>
            </div>
            <ProductList rid={rid} style={{flexDirection:'column'}} desc={true}/>
        </div>
    );
}
export default Restaurant;
