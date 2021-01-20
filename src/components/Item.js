import React from 'react';
import '../Styles.css';

function Item({item, addItem}) {
    const handleAdd=()=>{
        addItem(item)
    }
    return (
        <div className='item' id={item.id} key={item.id}>
            <div className='itemImg'>IMG</div>
            <div className='itemInfo'>
                <div>{item.name}</div>
                <div>{item.price}€</div>
            </div>
            <button className='itemButton' onClick={handleAdd}>Add to cart</button>
        </div>
    )
}

export default Item;