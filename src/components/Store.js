import React, { Component } from 'react';
import Product from './product.js';
import * as ProductController from '../controllers/productController';

function Feed(props){
    var productlist = props.products.map(element => 
        <Product
            key= {element._id}
            product = {element}
        />
    );
    return (<div className="store">{productlist}</div>)
}
class Store extends Component{

    constructor(){
        super();
        this.state= {
            products:[]
        }
    }
    componentWillMount(){
        ProductController.getAllProducts((err,products)=>{
            if(err){}
            else{
                this.setState({
                products
            })}
        })
    }
    render(){
        return(
            <Feed
            products={this.state.products}
            />
        )
    }
}

export default Store;