import React, {Component} from "react";

import Element from "../Element/Element";

import './products.css'

export default class Products extends Component{

    render() {
        const {data} = this.props;

        const arrayProducts = data.map((item, indx) => {
            return <Element dataProduct={data[indx]}
                            key={data[indx].id}/>;
        });
    
        return (
            <div className="products">
                {arrayProducts}
            </div>
            
        );
    }
}
