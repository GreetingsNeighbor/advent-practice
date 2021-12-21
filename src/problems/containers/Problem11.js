import React, { useCallback } from "react";
import ProblemBase from "../components/ProblemBase";

const Problem11 = () => {
  const solver = useCallback((fileData) => {
    //read first line, get length
    const linesLength = fileData.length;
    const length = fileData[0].length;
    let currentFlash = 0;
    let isAllSynced = false;
    let flashCount = 0;
    
    //create array of arrays
    let puzzelMatrix = [];
    puzzelMatrix = fileData.map((line) =>
      line.split("").map((value) => parseInt(value))
    );

    const incrementSurrounding = (x, y) => {
      if (x >= 0 && x < linesLength && y >= 0 && y < length) {
        if (puzzelMatrix[x][y] === 0) return;
        else if (puzzelMatrix[x][y] === 10) {
          puzzelMatrix[x][y] = 0;
          
          currentFlash++;
          incrementSurrounding(x - 1, y);
          incrementSurrounding(x + 1, y);
          incrementSurrounding(x, y - 1);
          incrementSurrounding(x, y + 1);
          incrementSurrounding(x - 1, y - 1);
          incrementSurrounding(x + 1, y - 1);
          incrementSurrounding(x - 1, y + 1);
          incrementSurrounding(x + 1, y + 1);
        }else 
        {
          puzzelMatrix[x][y]++;
          if(puzzelMatrix[x][y]===10) 
          {
            incrementSurrounding(x,y);
          }
          
        } 
      }
    };

    const incrementMatrix = () => {
      for (let i = 0; i < puzzelMatrix.length; i++) {
        for (let j = 0; j < puzzelMatrix[i].length; j++) {
      
            puzzelMatrix[i][j]++;
         
        }
      }
    };
    const incrementMatrixSurrounding = () => {
      for (let i = 0; i < puzzelMatrix.length; i++) {
        for (let j = 0; j < puzzelMatrix[i].length; j++) {
          if (puzzelMatrix[i][j] === 10) {
            incrementSurrounding(i, j, puzzelMatrix);
          }
        }
      }
    };
  
    const maxtrixAfterSteps = (steps) => {
      for (let i = 0; i < steps; i++) {
        incrementMatrix();
        incrementMatrixSurrounding();
        flashCount+=currentFlash;
      }
      
    };
    // maxtrixAfterSteps(100);
    let syncStep = 0;
    const getSynchronizationStep = () =>{
    
      const puzzelMatrixSize = puzzelMatrix.length*puzzelMatrix[0].length;
      while(syncStep <1000 || isAllSynced){
        currentFlash = 0;
        incrementMatrix();
        incrementMatrixSurrounding();
        syncStep++;
        if(currentFlash===puzzelMatrixSize)
        {
          isAllSynced=true;
          console.log("syncStep",syncStep);
          break;
         
        }
      }
    }
    getSynchronizationStep();
     console.log(puzzelMatrix, "flash", flashCount);
      console.log("currentFlash",currentFlash, puzzelMatrix.length*puzzelMatrix[0].length);
    return {
      answer1: "",
      answer2: "",
    };
  }, []);
  return (
    <ProblemBase
      title="problem 11"
      description="https://adventofcode.com/2021/day/11"
      solver={solver}
    ></ProblemBase>
  );
};

export default Problem11;
