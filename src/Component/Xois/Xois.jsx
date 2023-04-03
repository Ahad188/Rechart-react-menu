import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Xois = () => {
     const [phones, setPhone] = useState([])
     useEffect(()=>{
          axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
          .then(data =>{
               const loadData = data.data.data ;
               const phoneData = loadData.map(phone=>{
                 const parts  = phone.slug.split('-');
                 const price = parseInt(parts[1]);
                 const phoneInfo ={
                  name : phone.phone_name,
                  price : price,
                 }
                 return phoneInfo;
               })
               console.log(phoneData)
          })
     },[])
     return (
          <div>
               
          </div>
     );
};

export default Xois;