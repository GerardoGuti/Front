import React, { Component } from 'react';
import Axios from 'axios';
import Product from './product.js';
const url = 'http://10.40.10.53:3000/api/product';

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
        Axios.get(url).then(result=>{
            this.setState({
                products: result.data
            });
        }).catch(err=>console.log(err));
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