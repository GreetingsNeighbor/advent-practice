import React, { useCallback } from "react";
import BingoCardList from "../components/Problem4/bingoCardList";
import ProblemBase from "../components/ProblemBase";

const Problem4 = () => {
  const [bingcards, setBingoCards] = React.useState([]);
  const [index, setIndex] = React.useState(0);

  const solver = useCallback((fileData) => {
    let lines = fileData.slice();
    let answerone = 0;
    let answertwo = 0;
    const drawnNumbers = lines[0].split(",");
    let cards = [];
    let cardWinOrder = [];

    //remove first index from lines
    lines.shift();

    let cardset = [];

    for (let i = 0; i < lines.length; i++) {
      if (i % 6 === 0) continue;
      let row = [];
      const rowsplit = lines[i].split(" ");
      const cleanRow = rowsplit.filter((item) => item !== "");

      row.length = cleanRow.length;
      row.fill(0);

      for (let j = 0; j < cleanRow.length; j++) {
        row[j] = cleanRow[j];
      }

      cards.push({ key: cards.length, set: row.slice() });

      if (cards.length === 5) {
        cardset.push({ key: cardset.length, sets: [...cards] });

        cards = [];
      }
    }
    console.log(cardset);
    //create 2d array of [cardset.length][cardset[0].sets[0].set.length]
    let cols = [];
    let cardsetWon=Array( cardset.length);
    for (let i = 0; i < cardset.length; i++) {
      let col = [];
      col.length = cardset[0].sets[0].set.length;
      col.fill(0);
      cols.push(col.slice());
    }

    cardsetWon.fill(0);

    const calculateNonNegativeSumOfSet = (setNum) => {
      let sum = 0;
      for (let i = 0; i < cardset[setNum].sets.length; i++) {
        for (let j = 0; j < cardset[setNum].sets[i].set.length; j++) {
          if (cardset[setNum].sets[i].set[j] !== -1) {
            sum += parseInt(cardset[setNum].sets[i].set[j]);
          }
        }
      }
    //   console.log(sum);
      return sum;
    };

    for (let i = 0; i < drawnNumbers.length; i++) {
      for (let j = 0; j < cardset.length; j++) {
        //each set  5 sets
        if (cardsetWon[j] === 1) {
          continue;
        }
        for (let k = 0; k < cardset[j].sets.length; k++) {
          //each  set
          if (cardsetWon[j] === 1) {
            break;
          }
          for (let l = 0; l < cardset[j].sets[k].set.length; l++) {
            if (cardsetWon[j] === 1) {
                break;
              }
            const filtedCount = cardsetWon.filter( (item) => item === 0).length;
        
      
            
            if (cardset[j].sets[k].set[l].toString() === drawnNumbers[i]) {
              cardset[j].sets[k].set[l] = -1;

              cols[j][l]++;
            }
            if (cols[j].includes(5)) {
              console.log("answer", drawnNumbers[i]);
              setBingoCards(cardset);
              const x = calculateNonNegativeSumOfSet(j);
              answerone = drawnNumbers[i] * x;
              cardsetWon[j] = 1;
              cardWinOrder.push(answerone);
            //   return { answer1: drawnNumbers[i] * x, answer2: cards.length };
            }
          }
          if (cardset[j].sets[k].set.toString() === "-1,-1,-1,-1,-1") {
            setBingoCards(cardset);
            const x = calculateNonNegativeSumOfSet(j);
            answerone = drawnNumbers[i] * x;
            cardsetWon[j] = 1;
            cardWinOrder.push(answerone);
            // return { answer1: drawnNumbers[i] * x, answer2: cards.length };
          }
        }
      }
    }

    setBingoCards(cardset);
    cardset = [];
    return { answer1: cardWinOrder[0], answer2: cardWinOrder.pop() };
  }, []);

  return (
    <ProblemBase title="Problem 4" description="Product of the summation of non-drawn numbers on bingo card and the last dawn number.  Part one first card to win. Part two last card to win" solver={solver}>
      {Object.keys(bingcards).map((cardsSet) => (
        //   console.log(bingcards[cardsSet].sets)
        <BingoCardList key={cardsSet} bingoCards={bingcards[cardsSet].sets} />
      ))}
    </ProblemBase>
  );
};

export default Problem4;
