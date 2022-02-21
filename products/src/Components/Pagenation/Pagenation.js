import React from 'react';
export const Pagenation = ({ ProductSelector, postsPerPage, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(ProductSelector.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers);
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", width: "100%",marginTop:"20px" }}>
                {
                    pageNumbers.map((item) => (
                        <a onClick={() => paginate(item)} color="secondary" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", background: "grey", margin: "5px", borderRadius: "50%" }}>
                            {item}
                        </a>
                    ))
                }
            </div>
        </>
    );
};

