import React from 'react';
import './todoLists.css';
import { default as CardLists } from '../cardList';

import { useEffect, useState } from 'react';
import { GET_TODO_LIST } from '../../constant/apiEndPoints';
import { makeRequest } from '../../utils/makeRequest';

function todoLists(props) {
  const [todoListData, setTodoListData] = useState([]);

  useEffect(() => {
    makeRequest(GET_TODO_LIST)
      .then(response => {
        console.log(response);
        setTodoListData(response.data.lists);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div className="lists basic-padding">
      <div className="lists-header">
        <h3>AVAILABLE LISTS</h3>
      </div>
      <div className="lists-body">
        {todoListData.map((item, index) => {
          return <CardLists key={index} list={item} handleClick={props.handleClick} />;
        })}
      </div>
    </div>
  );
}

export default todoLists;
