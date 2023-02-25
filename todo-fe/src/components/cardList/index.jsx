import React from 'react';
import './cardList.css';
import PropTypes from 'prop-types';

function CardLists(props) {
  return (
    <div className="card-list-box" onClick={() => props.handleClick(props.list)}>
      {props.list.name}
    </div>
  );
}

export default CardLists;

CardLists.propTypes = {
  list: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
