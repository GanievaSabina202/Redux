import React from 'react'
import { useSelector } from 'react-redux';

const Basket = () => {
    const addProductsItem = useSelector((state) => state.products.addProducts)
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
                    <button>+</button>
                    <button>-</button>
                </div>
            ))
            }
        </div >
    )
}

export default Basket