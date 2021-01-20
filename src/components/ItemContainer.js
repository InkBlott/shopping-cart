import React from 'react';
import Item from './Item';
import '../Styles.css'

function ItemContainer({items, adder}){

    const mappedItems = items.map( item => {
        return(
            <Item item={item} addItem={adder} />
        )
    })


    return(
        <div className='itemContainer'>
            {mappedItems}
        </div>
    )
}

export default ItemContainer;