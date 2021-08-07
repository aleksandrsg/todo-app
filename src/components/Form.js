import React from 'react';

const Form = ({setInputText, inputText, todos, setTodos, setStatus }) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText (e.target.value);
  }

  const submitTodosHandler = (e) =>{
    e.preventDefault();
    setTodos ([
      ...todos, {text: inputText, completed: false, id: Math.random()* 1000 }
    ]);
    setInputText('');
  };

  const setStatusHandler = (e) =>{
    setStatus(e.target.value)
  }


    return (  
    <form>
      <input value={inputText} onChange= {inputTextHandler} type="text" className="todo-input" />
      <button onClick ={submitTodosHandler}className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={setStatusHandler}>
          <option value="all" >All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}
 
export default Form;