import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-gray-400 p-80 h-screen'>
            <h2 className='text-8xl m-16 text-white'> 404 Page Not found</h2>
            <Link to='/'>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
                    Back To Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;