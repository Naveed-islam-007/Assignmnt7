import React from 'react';
import Friends from './Friends';

const Homepage = () => {
    return (
        <div className='w-3/4 container mx-auto my-5 space-y-3 min-h-[1470px]'>
           <div className='  text-center space-y-3'>
            <h2 className='text-4xl font-extrabold'>Friends to keep close in your life</h2>
            <p >Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
               relationships that matter most.</p>
         <button className='btn bg-green-800 text-white '>Add Friend</button>
         <div className='grid grid-cols-4 gap-5'>
           
           <div className='shadow-lg py-5'>
            <h2>10</h2>
            <p>Friends</p>
           </div>
           <div className='shadow-lg py-5'>
            <h2>3</h2>
            <p>On Track</p>
           </div>
           <div className='shadow-lg py-5'>
            <h2>6</h2>
            <p>Needs Attenion</p>
           </div>
           <div className='shadow-lg py-5'>
            <h2>12</h2>
            <p>Interactions this Month</p>
           </div>
         </div>
        
           </div>

          
         <div>
            <h2 className='text-2xl font-bold'>Your Friends</h2>

            <div className='grid grid-cols-3 gap-6'>
              <Friends></Friends>
            </div>
         </div>
         
        </div>
    );
};

export default Homepage;