import React from "react";
import ProblemBase from "../components/ProblemBase";

const Problem5 = () => {
  const solver = (input) => {
    let table = {};
    //loop through input and split coordinates with seperator '->', trim(),
    const coordinates = input.map((coordinate) =>
      coordinate.trim().split(" -> ")
    );

    for (let i = 0; i < coordinates.length; i++) {
      if (coordinates[i].length < 2) {
        break;
      }
      let [x1, y1] = coordinates[i][0].split(",");
      let [x2, y2] = coordinates[i][1].split(",");
      x1 = parseInt(x1);
      y1 = parseInt(y1);
      x2 = parseInt(x2);
      y2 = parseInt(y2);

      if (y1 === y2) {
        if (x1 > x2) {
          let tempX = x1;
          x1 = x2;
          x2 = tempX;
        }
        for (let j = x1; j <= parseInt(x2); j++) {
          // and add to table if not already in table otherwise add to count
          if (table[`${j},${y1}`]) {
            table[`${j},${y1}`] += 1;
          } else {
            table[`${j},${y1}`] = 1;
          }
        }
      }
      if (x1 === x2) {
        if (y1 > y2) {
          let tempY = y1;
          y1 = y2;
          y2 = tempY;
        }
        //loop from y1 through y2
        for (let k = y1; k <= parseInt(y2); k++) {
          if (table[`${x1},${k}`]) {
            table[`${x1},${k}`] += 1;
          } else {
            table[`${x1},${k}`] = 1;
          }
        }
      }
      
      //loop if the difference of abs(x1-x2) is the same as the difference of abs(y1-y2)
      if (Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
        console.log(x1, y1, x2, y2);
        if (x1 > x2) {
          let tempX = x1;
          x1 = x2;
          x2 = tempX;
          let tempY = y1;
          y1 = y2;
          y2 = tempY;
        }
        let isNegative = false;
        if (y1 > y2) {
          isNegative = true;
        }
        //loop from x1 to x2
        let y = y1;
        for (let l = x1; l <= parseInt(x2); l++) {
          if (table[`${l},${y}`]) {
            table[`${l},${y}`] += 1;
          } else {
            table[`${l},${y}`] = 1;
          }
          if (isNegative) {
            y--;
          } else {
            y++;
          }
        }
      }
    }
    //loop through table and return count of coordinates that are > 1

    let count = 0;
    for (let key in table) {
      if (table[key] > 1) {
        count++;
      }
    }
    return { answer1: count, answer2: "" };
  };
  return (
    <ProblemBase
      solver={solver}
      title="Problem 5"
      description="Hydothermal vents: find total points of intersection"
    ></ProblemBase>
  );
};
export default Problem5;
