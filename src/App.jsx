import { useState } from 'react';
import './App.css';
import Cars from './components/Cars';
import supercars from './supercars'; 

function App() {
  const [cars, setCars] = useState(supercars);

  let removeCars = (id)=>{
    let newcars = cars.filter((car)=>(
      car.id !==id
    ))
    setCars(newcars)
  }

  if(cars.length===0){
    return(
      <div className='bg-black text-white gap-y-4 w-[100vw] h-[100vh] flex justify-center items-center flex-col'>
        <h1 className='font-serif text-3xl'>No Cars Left</h1>
        <button className=' rounded-lg border-x-4 py-4 px-10 bg-slate-500' onClick={()=>setCars(supercars)}>Refresh</button>
      </div>
    )  
  }


  return (
    <>
      <div className='bg-black text-white flex-col flex justify-center items-center gap-y-3 py-3 w-[100vw]'>
      <h1 class="glow-on-hover flex justify-center items-center font-serif" type="button">SUPERCARS DETAILS</h1>
        {/* Corrected the prop name to 'cars' (lowercase) */}
        <Cars cars={cars} removeCars={removeCars} />
      </div>
    </>
  );
}

export default App;