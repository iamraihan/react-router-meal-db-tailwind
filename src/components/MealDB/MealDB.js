// import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, } from 'react-router-dom';

const MealDB = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold m-4'>Meals Length is: {meals.length}</h2>
            <div className='flex justify-center'>
                <Outlet></Outlet>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center'>
                {
                    meals.map(meal => (
                        // <h2 className='text-3xl font-bold'>{meal.strMeal}</h2>
                        <Link to={`/meal-db/${meal.idMeal}`}><img className='w-80' src={meal.strMealThumb} alt="" /></Link>
                    ))
                }


            </div>
        </div>
    );
};

export default MealDB;