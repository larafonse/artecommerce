import React, { Component } from 'react';
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import Product from './Product';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                (value)=>{
                    const {id, company, img, info, price, title, inCart} = 
                        value.detailProduct;
                return(
                    <div className='container'>
                        <div className="row">
                    <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                        <h1>
                        {title}
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <img src={img} className="img-fluid" alt="product"/>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>painting: {title}</h2>
                        <h4 className="text-blue">
                            <strong>
                            price: <span>$</span> {price}
                            </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            about the piece:
                        </p>
                        <p className="text-muted lead">
                            {info}
                        </p>
                        <div>
                            <Link to="/">
                            <ButtonContainer>
                                back to products
                            </ButtonContainer>
                            </Link>
                            <ButtonContainer 
                                cart
                                disabled={inCart?true:false}
                                onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id);
                                }}
                            >
                                {inCart ? "inCart":"add to cart"}
                            </ButtonContainer>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                
            );
                }}


            </ProductConsumer>
        )
    }
}
