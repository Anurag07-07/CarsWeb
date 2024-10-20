import React, { useState } from 'react';
import './CarCard.css';
import Button from './Button';

function CarCard(props) {
  const { id, name, info, image, price, removeCars } = props;

  const [readmore, setReadMore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  return (
    <div className='box border-2 p-4 gap-y-2 grid grid-row-3'>
      <div className=' w-[100%] h-[100%] rounded-lg shadow-md shadow-zinc-300 hover:scale-105 transition-all duration-1000'>
        <img className=' w-[100%] h-[100%] rounded-lg' src={image} alt={name} />
      </div>
      <div>
        <h2 className='text-[0.9rem] font-serif shadow-white'>{name}</h2>
        <h4 className='text-2xl font-serif'>{price}</h4>
      </div>
      <div className='text-justify font-extralight text-[1.1rem]'>
        {description}
        <span
          onClick={() => setReadMore(!readmore)}
          className='text-blue-500 cursor-pointer'
        >
          {readmore ? `show less` : 'read more'}
        </span>
      </div>
      <Button id={id} removeCars={removeCars} ></Button>
    </div>
  );
}

export default CarCard;
