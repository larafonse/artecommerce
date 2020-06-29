import React,{Component} from "react";
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {ButtonContainer} from './Button';
import styled from "styled-components";

export default class Navbar extends Component{
    render(){
        return(
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
            <Link to = '/'>
                <h1 className='text-title'>LAJ</h1>
            </Link>
            
            <Link to = '/cart' className='ml-auto'>
                <ButtonContainer>
                    <span><i className="fas fa-shopping-cart"></i></span>
                </ButtonContainer>
            </Link>


            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
background:transparent;
.nav-link{
    color:black !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`
