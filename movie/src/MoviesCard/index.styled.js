import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 450px;
    height: 500px;
    border: 2px dashed blue;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img{
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
`
export const Title = styled.p`
    color: wheat;
    font-size: 24px;
    padding: 0;
    margin: 0;
`
export const TextWrapper = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(#ff000047,#111111b8);
`