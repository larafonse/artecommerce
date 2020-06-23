import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer }from '../context';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                    <div className='img-container p-5' onClick={()=>console.log('picture was clicked')}>
                        <Link to = '/details'>
                            <img src ={img} alt ='product image' className='card-img-top'/>
                        </Link>
                        <button className='card-btn' disabled = {inCart ? true : false} onClick={()=>console.log('added to the cart')}></button>
                        {inCart ? (<p className='text-capitalize mb-0' disabled>in cart</p>) :(<span><i className="fas fa-shopping-cart"></i></span>)}
                    </div>

                </div>
            </ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div`
`