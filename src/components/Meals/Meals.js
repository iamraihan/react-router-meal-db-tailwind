import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meals = ({ meal }) => {
    const { strMeal, strMealThumb, strCategory, idMeal } = meal

    const navigate = useNavigate()
    const productHandler = () => {
        navigate(`/search-details/${idMeal}`)

    }
    return (
        <div className='rounded-3xl shadow-lg p-3'>
            <img className='w-72 rounded-2xl ' src={strMealThumb} alt="" />
            <h2 className='text-left text-3xl m-3'>{strMeal}</h2>
            <h2 className='text-left text-2xl m-3'>{strCategory}</h2>
            <div className='flex justify-between'>
                <Link to={'/search-details/' + idMeal} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Details</Link>
                <button onClick={productHandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full'> Details</button>
            </div>
        </div>
    );
};

export default Meals;