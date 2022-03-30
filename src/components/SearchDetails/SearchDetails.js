import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SearchDetails = () => {
    const param = useParams()
    const [meal, setMeal] = useState({})
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, [param.mealId])
    return (

        <div className='rounded-3xl shadow-lg p-3 m-5 mb-8 w-80 mx-auto mt-20'>
            <img className='w-80 rounded-2xl ' src={meal[0]?.strMealThumb} alt="" />
            <h2 className='text-left text-3xl m-3 font-bold'>{meal[0]?.strMeal}</h2>
            <h2 className='text-left text-2xl m-3'>{meal[0]?.strCategory}</h2>
            <h2 className='text-left text-2xl m-3'>{meal[0]?.strTags ? meal[0]?.strTags : 'Not Found'}</h2>
            <h2 className='text-left text-2xl m-3'>{meal[0]?.strArea}</h2>

        </div>
    );
};

export default SearchDetails;