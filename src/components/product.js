import React, { Component } from 'react';
import '../styles/product.css';
import Axios from 'axios';
import Description from './description'
import {Link} from 'react-router-dom'

const url='http://10.40.10.53:3000/api/product/';

class Product extends Component{
    constructor(){
        super();
        this.state ={
            show    : true,
            product : {}
        }
    }
    componentWillMount(){
        this.setState({
            product : this.props.product
        });
    }
    render(){
        const product = this.state.product;
        return (this.state.show &&
            <div className="product">
                <div className="header">
                    <div className="name">{product.name}</div>
                    </div>
                    <div className="body">
                        <div className="img-preview-wrapper" >
                            <img
                            src={product.imageUrl}
                            alt=""
                            className="product-img"
                            onClick={()=><Link to={"/description"}/>}/>
                        </div>
                        <div className="description">{product.description}</div>
                    </div>
                <div className="price">${product.price}</div>
                <div className="button">
                    Add to the cart
                </div>
                <div className="button"
                onClick={()=>this.DeleteProduct(product._id)}
                >
                    Delete
                </div>
            </div>
        )
    }
    
    DeleteProduct(id){
        Axios.delete(url+id).then(res=>{
            console.log(res)
            this.setState({
                show: false
            })
        }
        ).catch();
    }
}



export default Product;
