import React from 'react';

const Meals = ({ meal }) => {
    const { strMeal, strMealThumb, strCategory } = meal
    return (
        <div className='rounded-3xl shadow-lg'>
            <img className='w-72 rounded-lg' src={strMealThumb} alt="" />
            <h2 className='text-left text-3xl m-3'>{strMeal}</h2>
            <h2 className='text-left text-2xl m-3'>{strCategory}</h2>
        </div>
    );
};

export default Meals;