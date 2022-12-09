import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Increment } from '../features/products/ProductsSlice';

const Basket = () => {
    const addProductsItem = useSelector((state) => state.products.addProducts)
    const IncrementItem = useSelector((state) => state.products.plusProduct)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(IncrementItem, "IncrementItem");
    }, [])

    return (
        <div>
            {addProductsItem.map((item) => (
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid red",
                    margin: "10px",
                }}>
                    <img src={item.image} style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain"
                    }} />
                    <h6>Count: {item.count} </h6>
                    <button onClick={() => dispatch(Increment(item))}>+</button>
                    <button>-</button>

                </div>
            ))
            }
        </div >
    )
}

export default Basket