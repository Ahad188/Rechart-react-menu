import React, { useEffect, useReducer, useState } from 'react';
import Card from './Card/Card';
 
 
 

const Price = () => {
     const [prices, setPrices] = useState([])
     useEffect(()=>{
          fetch('fake.json')
          .then(res=>res.json())
          .then(data =>setPrices(data))
     },[])
     // console.log(prices)
     return (
          <div className=' mt-8 text-4xl text-slate-500 font-bold'>
              <h3 className='text-center'>This is Price option</h3> 
              <div className='grid grid-cols-3 gap-5 mt-8'>
                 {
                    prices.map(price=><Card 
                         key={price.id}
                         price={price}
                         
                         ></Card>)
                 }
                 {/* <Card></Card> */}
              </div>
          </div>
     );
};

export default Price;