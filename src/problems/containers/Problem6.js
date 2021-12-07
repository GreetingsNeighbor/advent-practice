import React, { useCallback } from "react";
import ProblemBase from "../components/ProblemBase";

const Problem6 = () => {
  const solver = useCallback( (input) => {
    let sum = 0;
    const timerArray = input[0].split(",").map((num) => parseInt(num));

    //get max value from timerArray

    const calculateFishReproduction = (day, initial) => {
      //to calculate the time we create a new hashmap with the time as key and the value as the number of times it was used
      const timerMap = {};
      let max = 8;
      let min = 0;
      for (let i = 0; i <= max; i++) {
        timerMap[i] = 0;
      }
      timerMap[initial] = 1;

      for (let i = 0; i < day; i++) {
        let num = 0;
        for (let j = min; j <= max; j++) {
          if (j === 0) {
            num = timerMap[j];
          } else {
            timerMap[j - 1] = timerMap[j];
          }
          if (j === max) {
            timerMap[j] = 0;
          }
        }
        timerMap[6] += num;
        timerMap[8] += num;
      }

      let mapsum = 0;
      //sum up the values of the hashmap
      for (let i = 0; i <= max; i++) {
        mapsum += timerMap[i];
      }
      return mapsum;
    };
    const table = [];
    const table2 = [];
    for (let i = 0; i < 6; i++) {
      const info =  calculateFishReproduction(80, i);
      table.push(info);
    }
    for (let i = 0; i < 6; i++) {
        const info =  calculateFishReproduction(256, i);
        table.push(info);
      }
    const initialArryFishCount = Array(6).fill(0);

    for (let i = 0; i < timerArray.length; i++) {
      initialArryFishCount[timerArray[i]]++;
    }

    for (let i = 0; i < initialArryFishCount.length; i++) {
      sum += initialArryFishCount[i] * table[i];
    }
    console.log(sum);

    return { answer1: sum, answer2: "sum" };
  }, []);
  return (
    <ProblemBase
      title="problem 6"
      description="lantern"
      solver={solver}
    ></ProblemBase>
  );
};

export default Problem6;
