import React, { Fragment } from "react";
import classes from "./bingoCardList.module.css";
const BingoCardList = (props) => {
  const bingoCards = props.bingoCards;
  
  if (bingoCards === undefined) {
    console.log('nothing');
    return null};
 
  return (
    <div className={classes.bingCardList}>
      {Object.keys(bingoCards).map((card) => (

         <BingoCard key={card } card={bingoCards[card].set}></BingoCard>
      ))}
    </div>
  );
};

export const BingoCard = (props) => {
  const card = props.card;
  
  return (
    <Fragment>
      <ul className={classes.bingoCard}>
        {card.map((item) => {
          return <li >{item.toString()}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default BingoCardList;
