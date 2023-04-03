import React from 'react';
import List from '../../List/List';

const Card = ({price}) => {
     return (
          <div className='bg-blue-400 rounded-md mx-4 py-4'>
               <h2 className='py-5 text-center'>
                    <span className='text-orange-400'>{price.price}</span>
                    <span className='text-white'>/Mon</span>
               </h2>
               <h3 className='text-center'>{price.name}</h3>
               <h5 className='text-yellow-400 font-black text-2xl underline ml-5'>Features</h5>
               {
                    price.features.map((fe,ind)=><List
                    key={ind}
                    fe={fe}
                    ></List>)

               }
               <button className='bg-green-500 w-full mx-auto px-6 hover:bg-gray-500 hover:text-white'>Read More</button>
          </div>
     );
};

export default Card;