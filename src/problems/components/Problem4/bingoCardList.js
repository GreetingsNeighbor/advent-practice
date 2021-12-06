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

        <ul><BingoCard key={card } card={bingoCards[card].set}></BingoCard></ul> 
      ))}
    </div>
  );
};

export const BingoCard = (props) => {
  const card = props.card;
  
  return (
    <Fragment className={classes.bingoCard}>
      
        {card.map((item) => 
           <li ><div className={classes["bingoCard-div"]}> {item.toString()} </div>  </li>
        )}
    
    </Fragment>
  );
};

export default BingoCardList;
