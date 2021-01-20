import React from 'react';
import {Link} from 'react-router-dom'
import CartItem from './CartItem';
import '../Styles.css'

function CartItemContainer({cartItems, qtyChanger, itemRemover}){
    const style = {
        textAlign: 'center',
        width: '100%',
        marginTop: '30px',
    }

    const cartTotal = cartItems.map(item => item.price*item.qty).reduce((acc, cur) => acc + cur, 0);

    const mappedItems = cartItems.map( item => {
        return(
            <CartItem item={item} removeItem={itemRemover} changeQty={qtyChanger} />
        )
    })


    return(

        <div>
            {cartItems.length > 0 ? (
                <div className='cartContainer'>
                    <div className='itemContainer'>{mappedItems}</div>
                    <div>
                        <div className='cartTotal'>Cart total: {cartTotal}€</div>
                        <Link to ='/checkout'>
                            <button className='itemButton'>Checkout</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <h2 style={style}> Cart is empty</h2>
            )}
        </div>
    )
}

export default CartItemContainer;