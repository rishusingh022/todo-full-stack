import React from 'react';
import { default as CreateButton } from '../createButton/createButton';
import './header.css';
function header(props) {
  return (
    <div className="header basic-padding ">
      <CreateButton title={props.title} />
    </div>
  );
}

export default header;
