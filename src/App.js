import './App.css';
import React, {useState} from 'react';
//importing components
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] =useState([]);

  return (
    <div className="App">
     <header>
       <h1>Aleks Todo List</h1>
     </header>
    <Form
    setTodos={setTodos}
    todos={todos}
    inputText={inputText}
    setInputText={setInputText}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
