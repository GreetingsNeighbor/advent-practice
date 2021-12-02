import classes from './Card.module.css';
import React from 'react';
const Card = (props) => {
  return (
    <section
      className={`${classes.Card} ${props.className ? props.className : ''}`} style={props.style}
    >
      {props.children}
    </section>
  );
};

export default Card;