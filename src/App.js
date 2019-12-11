import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './Todolist/Header';
import ListItems from './Todolist/ListItems';
import NewItem from './Todolist/Newitem';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [showNew, setNew] = useState(false);

  const handleNewTodo = (val) => {
    var timestamp = new Date().getTime();
    setTodos([
      ...todos,
      {
        label: val,
        completed: false,
        id: timestamp
      }
    ]);
  }


  return (
    <div className="App">
      <div className='todolist'>
        <Header handleNew={setNew} />
        <ListItems data={todos}/>
        {
          showNew &&
          <NewItem text={text} setText={setText} handleNewTodo={handleNewTodo} />
        }
      </div>
    </div>
  );
}

export default App;