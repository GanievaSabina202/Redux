
import {Wrapper,Title,TextWrapper} from './index.styled'
import { useSelector, useDispatch } from 'react-redux';
const MoviesCard = () => {
    const movieSelector = useSelector((state) => state.movie.movie)
    console.log(movieSelector);
    return (
        <Wrapper>
            <img src={movieSelector.Poster} />
            <TextWrapper>
            <Title>{movieSelector.Title} </Title>
            <Title> {movieSelector.Year}</Title>
            </TextWrapper>
        </Wrapper>
    );
}

export default MoviesCard;