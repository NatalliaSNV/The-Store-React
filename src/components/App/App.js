import React, {Component} from "react";

import Products from "../Products/Products";
import SizesFilter from "../sizes-filter/sizes-filter";

import './app.css';

export default class App extends Component{

    state = {
        storeData: [
            {id: 1, name: 'Cropped Stay Groovy', photo: 'https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644-1-product.b6128dd1df3de552cf1b.webp', sizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'], price: '10.9', addToCart: false},
            {id: 2, name: 'Basic Cactus White T-shirt', photo: 'https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610-1-product.1f07d5fa94ed8584c756.webp', sizes: ['L', 'XL', 'XXL'], price: '13.25', addToCart: false},
            {id: 3, name: 'Skater Black Sweatshirt', photo: 'https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676-1-product.25f42b6c504af11cc71c.webp', sizes: ['S', 'ML', 'XL'], price: '25.9', addToCart: false},
            {id: 4, name: 'Black Tule Oversized', photo: 'https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370-1-product.e53dc0babb7b44f7e40e.webp', sizes: ['XS', 'S', 'M', 'ML'], price: '29.45', addToCart: false},
            {id: 5, name: 'Black Batman T-shirt', photo: 'https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392-1-product.85191f0d6e809687fe4a.webp', sizes: ['S', 'M', 'ML', 'L', 'XL'], price: '10.9', addToCart: false},
            {id: 6, name: 'Blue T-Shirt', photo: 'https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304-1-product.00bf8ca2603352e0cfad.webp', sizes: ['XS', 'XL', 'XXL'], price: '9', addToCart: false}
        ],

        sizeFilter: []
    };

    onClickSize = (size) => {
        this.setState(({sizeFilter}) => {
            const newSizeFilter = [...sizeFilter];
            const indx = newSizeFilter.indexOf(size);
            if (indx > -1) {
                newSizeFilter.splice(indx, 1);
            } else {
                newSizeFilter.push(size);
            }
            console.log('newSizeFilter', newSizeFilter);

            return {sizeFilter: newSizeFilter};
        });
    }

    filterProducts = (arr, filter) => {

        if (filter.length === 0) return arr;

        const newArr = [];
        arr.map((item) => {
            for (let i = 0; i < filter.length; i++) {
                if (item.sizes.includes(filter[i])){
                    newArr.push(item);
                    break;
                }
            }
        })

        return newArr;

    }
    
    render() {

        const { storeData, sizeFilter } = this.state;
        const newArr = this.filterProducts(storeData, sizeFilter);

        return (
            <div className="app">
                <h1 className="header">Online Store</h1>
                <div className="main">
                    <SizesFilter onClickSize={this.onClickSize}
                                 filter={this.state.sizeFilter}/>
                    <Products data={newArr}/>
                </div>
            </div>
        );
    }
}
