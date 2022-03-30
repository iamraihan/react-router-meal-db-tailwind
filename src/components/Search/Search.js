import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';

const Search = () => {
    const [search, setSearch] = useState('')
    const [meals, setMeals] = useState([])



    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))

    }, [search])


    const searchHandle = (e) => {
        setSearch(e.target.value);

    }
    return (
        <div>
            <h2 className='text-5xl font-bold m-8'>Search Your Food</h2>
            <input onChange={searchHandle} className="w-1/2 text-center h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Search Your Food" />
            <h2 className='text-3xl font-bold m-8'>Meals Length: {meals.length}</h2>

            <div className="grid grid-cols-4 gap-4 justify-items-center">
                {
                    meals.map(meal => <Meals key={meal.idMeal} meal={meal}></Meals>)
                }
            </div>
        </div>
    );
};

export default Search;