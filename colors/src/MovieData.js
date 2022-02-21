import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './store/MovieSlice';
// import axios from 'axios';

const MovieData = () => {
    const movieSelector = useSelector((state) => state.movie.movie);
    console.log(movieSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        const getDataWrapper = () => {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(json => dispatch(getData(json)))
        }
        getDataWrapper()
    }, [])

    return (
        <div>
        {
            movieSelector.map((i)=>(
                <img src={i.url} style={{width:"50px"}}/>
            ))
        }
        </div>
    );
};

export default MovieData;