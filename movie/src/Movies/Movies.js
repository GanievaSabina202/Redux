import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import axios from 'axios';
import { getDate } from '../store/movieSlice'
import MoviesCard from '../MoviesCard';
import { SearchWrapper, Input,CustomButton} from './Movies.styled'
const Movies = () => {
    const inputRefValue = useRef()

    const movieSelector = useSelector((state) => state.movie.movie)
    const dispatch = useDispatch()

    const GetData = () => {
        const inputValue = inputRefValue.current.value;
        console.log(inputValue);
        axios.get(`https://www.omdbapi.com/?t=" + ${inputValue} + "&y=&plot=short&apikey=trilogy`)
            .then(res => dispatch(getDate(res.data)))
    }

    const searchBtn = () => {
        GetData()
    }

    return (
        <div>
            <SearchWrapper>
                <Input 
                id="outlined-basic"
                label="Search Movie"
                variant="outlined"
                size="small"
                inputRef={inputRefValue} 
                type='text'focused 
                />
                <CustomButton onClick={searchBtn} variant="outlined">Ok</CustomButton>
            </SearchWrapper>
            <MoviesCard />
        </div>
    );
};

export default Movies;