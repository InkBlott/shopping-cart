import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import ItemContainer from './components/ItemContainer';
import {items} from './data/itemData';
import Home from './components/Home';
import CartItemContainer from './components/CartItemContainer';
import Checkout from './components/Checkout';

function Routes() {
    const [cartItems, setCartItems]=useState([]);
    const [shopItems, setShopItems]=useState(items);

    const changeQty = (id, count) =>
    setCartItems(
        cartItems.map(
            item => item.id === id ? { ...item, qty : item.qty + count} : item
        )
    )

    const getCartCount = cartItems.reduce((acc, cur) =>acc + cur.qty, 0)

    function itemAdder(newItem) {

        const checkCart = cartItems.map(cItem => cItem.id).includes(newItem.id)

        if (checkCart) { 
            changeQty(newItem.id, 1);
        } else {
            setCartItems([...cartItems, newItem]);
            console.log(cartItems);
        }
    }

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    }


    return(
        <Router>
            <Nav cartQty={getCartCount}/>
            <Switch>
                
                <Route exact path='/shop'>
                    <ItemContainer items={shopItems} adder={itemAdder}/>
                </Route>
                <Route exact path='/cart'>
                    <CartItemContainer cartItems={cartItems} qtyChanger={changeQty} itemRemover={removeItem}/>
                </Route>
                <Route exact path='/checkout' component={Checkout}/>
            </Switch>
        </Router>   
    );
}

export default Routes;