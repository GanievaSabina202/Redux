import React from 'react';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getProduct } from '../../store/productSlice/ProductSlice';
import axios from "axios"
import { ProductCardIndex } from '../ProductCard';
import { Container } from '@mui/material';



const Product = () => {
    const dispatch = useDispatch()
    const getData = async () => {
        let Data = await axios.get("https://fakestoreapi.com/products")
        dispatch(getProduct(Data.data))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Container>
            <ProductCardIndex />
        </Container>
    );
};

export default Product;