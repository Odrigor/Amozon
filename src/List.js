import React from 'react';
import Item from './Item'

function List(props) {
    return(
        <div className="list">
            {
                props.items.map( item => 
                <Item
                    key={item.id}
                    id={item.id}
                    tittle={item.tittle}
                    image={item.image}
                    rating={item.rating}

                ></Item>
                )
            }
        </div>
    );
}

export default List;