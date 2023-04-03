import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dasbord = () => {

     const students = [
          {
            id: 1,
            name:'A',
            math: 85,
            english:60
          },
          {
            id: 2,
            name:'B',

            math: 75,
            english:70
          },
          {
            id: 3,
            name:'C',
            math: 90,
            english:80
          },
          {
            id: 4,
            name:'D',

            math: 80,
            english:95
          },
          {
            id: 5,
            name:'E',
          
            math: 95,
            english:80
          }
        ];
        
     return (
          <div className='ml-20'>
               <h3 className='text-center font-bold text-3xl mt-5 text-orange-400'>This is adasbord </h3>
               <LineChart
               width={1000}
               height={600}
               data={students}
               >
                    <Line dataKey="math" stroke="#8884d8"  />
                    <Line dataKey="english" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis></YAxis><Tooltip></Tooltip>
               </LineChart>
          </div>
     );
};

export default Dasbord;