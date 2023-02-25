import React from 'react';
import './createButton.css';
import PropTypes from 'prop-types';
const CreateButton = props => {
  return (
    <div className="create">
      <div className="btn">+</div>
      <div className="btn-text">{props.title}</div>
    </div>
  );
};

export default CreateButton;

CreateButton.propTypes = {
  title: PropTypes.string.isRequired,
};
