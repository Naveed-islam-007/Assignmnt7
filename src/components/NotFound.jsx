import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen text-8xl font-bold'>
            <h2 >404 <span className='text-green-800'>NOT AVAILABLE</span></h2>
            <Link to={'/'} className='btn btn-success'> Back Home</Link>
        </div>
    );
};

export default NotFound;