import React, {useState} from 'react';

import './style.scss';

const List = (props) => {

    return(
        <div>
           <div className='item'>{props.label}</div>
          
        </div>
    )
}

export default List;