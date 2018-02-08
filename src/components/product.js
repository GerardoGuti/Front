import React, { Component } from 'react';
import '../styles/product.css';
import {Link} from 'react-router-dom'
import * as ProductController from '../controllers/productController';

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
                onClick={()=>this.deleteProduct(product._id)}
                >
                    Delete
                </div>
            </div>
        )
    }
    
    deleteProduct(id){
        ProductController.deleteProduct(id,(err,res)=>{
            if(err){console.log(err)}
            else{
                this.setState({
                    show:false
                })
            }
        })

    }
    updateProduct(id,body){
        ProductController.updateProduct(id,body,(err,res)=>{
            if(err){console.log(err)}
            else{
                console.log(res)
            }
        })
    }
}



export default Product;
