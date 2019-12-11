import React from 'react';
import List from './List';

const ListItems = ({data,handleToggle}) =>{

    return( 
        <div>
        {data.map((todo) => (
        <div onClick={()=>handleToggle(todo.id)}>
            <List key={todo} {...todo}/>
        </div>
       ))}
        </div>
    )
} 

export default ListItems;