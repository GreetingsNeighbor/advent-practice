import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import classes from './ProblemItem.module.css';
const ProblemItem = (props) => {
  return (
        <li key={props.id} className={classes["ProblemItem"]}>
          <Card className={classes['ProblemItem__content']}>
          <Link to={`/problem/${props.id}`}><div className={classes["ProblemItem__info"]}><h2>{props.title}</h2></div></Link>
          </Card>
        </li>
  );
}


export default ProblemItem;