import React from 'react';
import { useState } from 'react'
import { Stack, Rating, Card, CardActions, CardContent, CardMedia, Button, Typography, } from '@mui/material';
import { useSelector } from 'react-redux';
import { Pagenation } from '../Pagenation/Pagenation';

export const ProductCard = () => {
    const ProductSelector = useSelector((state) => state.products.products)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4)
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ProductSelector.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    
    return (
        <>
            <Stack direction="row" justifyContent="center" spacing={5} mt={5} >
                {currentPosts.map((item) => (
                    <Card sx={{ maxWidth: 300 }} key={item.id}>
                        <CardMedia
                            component="img"
                            alt=""
                            height="300"
                            image={item.image}
                            sx={{ objectFit: "cover" }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Stack direction="row" >
                                <Button size="small">{item.price}</Button>
                                <Rating name="read-only" value={item.rating.rate} precision={0.5} readOnly />
                            </Stack>
                        </CardActions>
                    </Card>
                ))}
            </Stack >
            <Pagenation paginate={paginate} ProductSelector={ProductSelector} postsPerPage={postsPerPage} />
        </>
    );
};

