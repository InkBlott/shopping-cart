import React from 'react';
import '../Styles.css';

function CartItem({item, removeItem, changeQty}) {
    const handleInc=()=>changeQty(item.id, 1);
    const handleDec=()=>changeQty(item.id, -1);
    const handleDel=()=>removeItem(item.id);

    const price = item.price * item.qty;

    return (
        <div className='item' id={item.id} key={item.id}>
            <div className='itemImg'>IMG</div>
            <div className='cartItemInfo'>
                <div>{item.name}</div>
            </div>
            <div className='cartItemInfo'>
                <div>Total: {price}€</div>
            </div>
            <div className='cartItemInfo' ><div>Quantity:</div> {item.qty}</div>
            <div className='cartButtonContainer'>
                <button className='itemButton spacerRight' onClick={handleDec} disabled={item.qty<2}>-</button>
                <button className='itemButton spacerLeft' onClick={handleInc}>+</button>    
            </div>
            <button className='itemButton' onClick={handleDel}>Delete</button>
        </div>
    )
}

export default CartItem;