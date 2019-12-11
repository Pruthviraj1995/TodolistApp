import React, { useState } from 'react';

import './style.scss';

const List = (props) => {
    const handledelete = (e) => {
        e.stopPropagation();
        props.deleteItems(props.uid)
    }
    return (
        <div className={props.completed ? 'item itemcompleted' : 'item'}>
            <div>
                <input type='radio' className='radio-btn' checked={props.completed} />
            </div>
            <div>
                <span className='label'>{props.label}</span>
                <span className='delete' onClick={handledelete}>X</span>
            </div>
        </div>
    )
}

export default List;    
