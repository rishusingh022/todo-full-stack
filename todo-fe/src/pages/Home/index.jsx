import React from 'react';
import { TodoList, Header } from '../../components';

import { useNavigate } from 'react-router-dom';
let title = 'Create List';
function Home() {
  const navigate = useNavigate();
  const handleClick = list => {
    navigate(`/task/${list.id}`);
  };
  return (
    <div>
      <Header title={title} />
      <TodoList handleClick={handleClick} />
    </div>
  );
}

export default Home;
