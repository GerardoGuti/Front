import React, {Component} from 'react';
import Bar from './Bar'

class Description extends Component{
    constructor(){
        super();
        this.state={
            product : {}
        }
    }
    componentWillMount(){        
        this.setState({
            product : this.props.product
        })
    }
    render(){
        const product = this.state.product;
        return(
            <div className="general">
                <Bar/>
                <div className="name">
                    {product.name}
                </div>
                <div>
                    <div><img alt="" src={product.imageUrl}/></div>
                    <div className="price">${product.price}</div>
                    <div className="description">{product.description}</div>
                </div>
                
            </div>
        );
    }
}

export default Description;