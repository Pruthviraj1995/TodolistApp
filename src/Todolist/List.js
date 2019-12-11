import React, {useState} from 'react';

import './style.scss';

const List = (props) => {
   
    return(
        <div className={props.completed?'itemcompleted':'item'}>
           <input type='radio' className='radio-btn' checked={props.completed}/>  
           <div className='label'>{props.label}</div>
        </div>
    )
}

export default List;