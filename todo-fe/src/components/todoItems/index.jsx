import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './todoItems.css';
import { default as todoList } from '../../mocks/todoList.js';
import { PUT_TODO_LIST_BY_ID, GET_TODO_LIST_BY_ID } from '../../constant/apiEndPoints';
import { makeRequest } from '../../utils/makeRequest';

function TodoItems() {
  let { id } = useParams();
  id = parseInt(id);
  let list = todoList.find(item => item.id === id);
  const [newTodo, setNewTodo] = React.useState('');
  const [todos, setTodos] = React.useState(list.tasks);
  const getById = async listId => {
    const response = await makeRequest(GET_TODO_LIST_BY_ID(listId));
    console.log(response.data.list.tasks);
  };
  getById(id);
  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const handleClick = async task => {
    const newTodo = {
      taskid: todos.length + 1,
      title: task,
    };
    setTodos([...todos, newTodo]);
    await makeRequest(PUT_TODO_LIST_BY_ID(id), {
      data: {
        tasks: todos,
      },
    });
    setNewTodo('');
  };
  return (
    <div className="body">
      <div className="card">
        <div className="card-header">
          <h1>{list.name}</h1>
        </div>
        <div className="card-body">
          {todos.map((item, index) => {
            return <p key={index}>{item.title}</p>;
          })}
          <input type="text" value={newTodo} onChange={handleChange} />
          <div className="submit" onClick={() => handleClick(newTodo)}>
            Add Tasks
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
