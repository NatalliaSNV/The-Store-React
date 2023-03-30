import React, {Component} from "react";

//import Size from "../size/size";

import './sizes-filter.css';

export default class SizesFilter extends Component{

    render() {

        const { onClickSize, filter } = this.props;

        const sizesArr = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

        const sizesComponent = sizesArr.map((item) => {

            const style = filter.includes(item) ? ' sizeDark' : ' sizeLight';
            return (
                        <p className={"size" + style}
                           key={item}
                           onClick={() => onClickSize(item)}>
                        {item}
                        </p>
                    );
        });
    
        return (
            <div className="sizes-filter">
                <h3>Sizes:</h3>
                <div className="filter">
                    {sizesComponent}
                </div>
            </div>
        );
    }
}
