import React, { useCallback } from "react";
import ProblemBase from "../components/ProblemBase";

const Problem7 = () => {
  const solver = useCallback((input) => {
 
    const positionsList = input[0].split(",").map((pos) => parseInt(pos));
    const min = Math.min(...positionsList);
    const max = Math.max(...positionsList);
    let fuelConsumptions = [];
    for (let i = min; i <= max; i++) {
      fuelConsumptions.push(0);

      for (let j = 0; j < positionsList.length; j++) {
        fuelConsumptions[i] += Math.abs(positionsList[j] - i);
      }
    }

    const leastFuelConsumption = Math.min(...fuelConsumptions);



    let newFuelConsumptions = [];
    for (let i = min; i <= max; i++) {
      newFuelConsumptions.push(0);
      for (let j = 0; j < positionsList.length; j++) {
        const n = Math.abs(positionsList[j] - i);
        const formulaNplus1 = (n * (n + 1)) / 2;
        newFuelConsumptions[i] += formulaNplus1;
        
      }
    }
    const newLeastFuelConsumption = Math.min(...newFuelConsumptions);


    // for (let i = 0; i < positionsList.length; i++) {

    //   let n = Math.abs(positionsList[i]-leastFuelConsumptionIndex);
    //   for(let j = 0; j < n; j++) {
    //     newFuelConsumption2+=j+1;
    //   }

    // }
    console.log(newLeastFuelConsumption);
    const newLeastFuelConsumptionIndex = newFuelConsumptions.indexOf(newLeastFuelConsumption);
    console.log(newLeastFuelConsumptionIndex);
    return { answer1: leastFuelConsumption, answer2: newLeastFuelConsumption };
  }, []);
  return (
    <ProblemBase
      title="problem 7"
      description="Least fuel"
      solver={solver}
    ></ProblemBase>
  );
};

export default Problem7;
