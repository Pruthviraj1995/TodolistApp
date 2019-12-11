import React, { useState } from 'react';

import './style.scss';
import delicn from '../deletelogo.svg'
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
                <img src={delicn} alt="" onClick={handledelete} className="delete"/>
            </div>
        </div>
    )
}

export default List;    
