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

  const toggleCompleted=(id)=>{
    var indx=todos.findIndex(el=>el.id==id);

    var newTodo=[
      ...todos.slice(0,indx),
      {
        ...todos[indx],
        completed:!todos[indx].completed
      },
      ...todos.slice(indx+1)
    ]

    setTodos(newTodo);
  }

  const deleteItems = (id) => {
    // alert(id)
    var indx = todos.findIndex(el=>el.id==id);
    console.log('Helo', indx);
    var removeTodo=[
      ...todos.slice(0, indx),
     ...todos.slice(indx+1)
    ]
    setTodos(removeTodo);
  }

  return (
    <div className="App">
      <div className='todolist'>
        <Header handleNew={setNew} />
        <ListItems data={todos} handleToggle={toggleCompleted} deleteItems={deleteItems} />
        {
          showNew &&
          <NewItem text={text} setText={setText} handleNewTodo={handleNewTodo} />
        }
      </div>
    </div>
  );
}

export default App;