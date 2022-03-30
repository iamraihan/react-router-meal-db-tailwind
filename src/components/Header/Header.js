import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-center py-8 px-12 justify-around bg-black text-white'>
            <Link to='/'>
                <div className='font-sans font-bold text-xl text-white'>
                    <p>Meal DB</p>
                </div></Link>
            <div className='flex gap-4 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/others'>Others</CustomLink>

            </div>
        </nav>
    );
};

export default Header;