import React, {useState} from 'react';

import './style.scss';

const Header = (props) => {
    return(
            <div class="header">
                <h3 class="heading">
                    Todo
                </h3>
                <div class="AddTodo" onClick={()=>props.handleNew(true)}>+</div>
            </div>
    )
}

export default Header;