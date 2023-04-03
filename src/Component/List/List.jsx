import React from 'react';
import { ChartBarIcon,CheckIcon } from '@heroicons/react/24/solid'
const List = ({fe}) => {
     return (
          <ul className='ml-5 flex px-2'>
               <CheckIcon className='w-4 h-4'></CheckIcon>
               <li className='text-2xl
               '>{fe}</li>
          </ul>
     );
};

export default List;