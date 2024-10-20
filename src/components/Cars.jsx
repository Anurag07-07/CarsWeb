import React from 'react'
import CarCard from './CarCard';

function Cars(props) {
  
  const {cars,removeCars} = props;

  return (
    <div className='grid grid-cols-3 gap-4   p-5'>
      {
        cars.map((car)=>(
        <CarCard {...car} key={car.id} removeCars={removeCars} ></CarCard>
      ))
      }
    </div>
  )
}

export default Cars