import React from 'react';

const NewItem = (props) => {
    
    const handleKeyPress = (e) => {
        
        if(e.key == 'Enter'){
            e.preventDefault();
            if(props.text !== ''){
            props.handleNewTodo(props.text);
            props.setText('');
            }
        }
    }

    const handleChange = (e) => {
        props.setText(e.target.value);
    }

    return(
        <form onSubmit={props.handleNewTodo}>
            <input type='text' value={props.text} onChange={handleChange} onKeyPress={handleKeyPress} autoFocus='autofocus'/>  
        </form>
    );
}

export default NewItem;