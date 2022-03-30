import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDbDetails = () => {
    const { details } = useParams()
    const [meal, setMeal] = useState({})
    console.log(meal);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, [details])

    return (
        <div className='rounded-3xl shadow-lg p-3 m-5 mb-8 '>
            <img className='w-80 rounded-2xl ' src={meal[0]?.strMealThumb} alt="" />
            <h2 className='text-left text-3xl m-3'>{meal[0]?.strMeal}</h2>
            <h2 className='text-left text-2xl m-3'>{meal[0]?.strCategory}</h2>
            <h2 className='text-left text-2xl m-3'>{meal[0]?.strTags ? meal[0]?.strTags : 'Not Found'}</h2>

        </div>
    );
};

export default MealDbDetails;