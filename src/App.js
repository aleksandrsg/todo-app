import './App.css';
import React, {useState, useEffect} from 'react';
//importing components
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
  // Here our State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] =useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);


  // useEffect

  useEffect( () => {
    filterHandler();
  },[todos, status]);

  //Functions

const filterHandler = () =>{
  switch (status) {
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
}

  return (
    <div className="App">
     <header>
       <h1>Aleks Todo List</h1>
     </header>
    <Form
    setTodos={setTodos}
    todos={todos}
    inputText={inputText}
    setInputText={setInputText}
    setStatus ={setStatus}
    />
    <TodoList 
    todos={todos} 
    setTodos={setTodos}
    filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
