import React from "react";
import {NavLink} from 'react-router-dom';
import '../Styles.css'

function Nav({cartQty}) {
    return(
        <nav className='navigation'>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <NavLink exact to='/shopping-cart' className='navStyle' activeStyle={{color:'orange'}}>
                    <li>Home</li>
                </NavLink>
                <NavLink exact to='/shop' className='navStyle' activeStyle={{color:'orange'}}>
                    <li>Shop</li>
                </NavLink>
                <NavLink exact to='/cart' className='navStyle' activeStyle={{color:'orange'}}>
                    <li>Cart [{cartQty}]</li>
                </NavLink>
            </ul>

        </nav>
    );

}

export default Nav;