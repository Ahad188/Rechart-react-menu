import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Navber = () => {
     const [open,setOpen] = useState(false)
     const routes = [
          {
            name: "Home",
            id: 1,
            path: "/"
          },
          {
            name: "About",
            id: 2,
            path: "/about"
          },
          {
            name: "Contact",
            id: 3,
            path: "/contact"
          },
          {
            name: "Products",
            id: 4,
            path: "/products"
          },
          {
            name: "Services",
            id: 5,
            path: "/services"
          }
        ];
        
     return (
          <nav>
               <div className='ms-8 md:hidden' onClick={()=>setOpen(!open)}>
                    <span>{open === true ? <XMarkIcon className='h6 w-6 text-red-400'></XMarkIcon> : <Bars3Icon className='h6 w-6 text-red-400'></Bars3Icon>}</span>
               
               
               </div>
               <ul className={`md:flex text-3xl absolute md:static duration-700 ${open? 'top-6':'-top-48'}`}>
                    {
                         routes.map(route=>  <Link
                         key={route.id}
                         route={route}
                         ></Link>)
                    }
               </ul>
          </nav>
     );
};

export default Navber;