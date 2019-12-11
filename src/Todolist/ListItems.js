import React from 'react';
import List from './List';
import './style.scss'
const ListItems = ({data,handleToggle, deleteItems}) =>{
    const completed=data.filter(el=>el.completed);
    const ongoing=data.filter(el=>!el.completed);
    const displaydata=[...ongoing,...completed];

    return( 
        <div className="listbody">
        {displaydata.map((todo) => (
        <div onClick={()=>handleToggle(todo.id)}>
            <List key={todo} {...todo} deleteItems={deleteItems} uid={todo.id}/>
        </div>
       ))}
        </div>
    )
} 

export default ListItems;