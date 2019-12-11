import React from 'react';
import List from './List';

const ListItems = (props) =>{

    return( 
        <div>
        {props.data.map((todo) => (
        <div>
            <List key={todo} {...todo}/>
        </div>
       ))}
        </div>
    )
} 

export default ListItems;