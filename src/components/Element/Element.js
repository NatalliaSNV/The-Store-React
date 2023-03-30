import React from "react";

import './element.css';

const Element = ({dataProduct}) => {

    const style = {
        width: '10rem'
    };

    return (
        <div className="card" style={style}>
            <img src={dataProduct.photo} className="card-img-top" alt="product" />
            <div className="card-body">
                <h5 className="card-title">{dataProduct.name}</h5>
                <p className="card-text">{dataProduct.price + ' $'}</p>
                <p className="card-text">{dataProduct.sizes.join(', ')}</p>
                <button className="btn btn-primary">Add To Cart</button>
            </div>
        </div>
    );
}

export default Element;