import React, { useCallback } from "react";
import ProblemBase from "../components/ProblemBase";

const Problem9 = () => {
  const solver = useCallback((fileData) => {
    let counterSum = 0;

    //loop through each line, loop through each character
    for (let i = 0; i < fileData.length; i++) {
      for (let j = 0; j < fileData[i].length; j++) {
        //if the current number is the lower than the number to the left, right, up, and down of it then increment the counter
        const left = fileData[i][j - 1] || 9;
        const leftInt = parseInt(left);
        const right = fileData[i][j + 1] || 9;
        const rightInt = parseInt(right);
        const up = fileData[i - 1] ? fileData[i - 1][j] : 9;
        const upInt = parseInt(up);
        const down = fileData[i + 1] ? fileData[i + 1][j] : 9;
        const downInt = parseInt(down);

        if (
          parseInt(fileData[i][j]) < leftInt &&
          parseInt(fileData[i][j]) < rightInt &&
          parseInt(fileData[i][j]) < upInt &&
          parseInt(fileData[i][j]) < downInt
        ) {
          counterSum += parseInt(fileData[i][j]) + 1;
        }
      }
    }
    console.log("counterSum", counterSum);


    let basinCounter = 1;

    let basinArry = [];
    //basinArry is [fileData.length][fileData[i].length]
    for (let i = 0; i < fileData.length; i++) {
      basinArry[i] = [];
      for (let j = 0; j < fileData[i].length; j++) {
        basinArry[i][j] = 0;
      }
    }

    const getBasin = ( fileData) => {
      for (let i = 0; i < fileData.length; i++) {
        for (let j = 0; j < fileData[i].length; j++) {
         
          if(parseInt(fileData[i][j])!==9 && basinArry[i][j]===0) {
            let isBack= traverse(i, j, basinCounter, fileData)

              basinCounter++;
             
          } 

        }
      }
    };

    const traverse = (x, y, island, fileData) => {
      //if the key x,y is  in the basin, return

      if (basinArry[x][y]>0) return true;

      basinArry[x][y] = island;
 
     // fileData[x][y] = 9;
      

          const left = fileData[x][y - 1] || 9;
          const leftInt = parseInt(left);
          const right = fileData[x][y + 1] || 9;
          const rightInt = parseInt(right);
          const up = fileData[x - 1] ? fileData[x - 1][y] : 9;
          const upInt = parseInt(up);
          const down = fileData[x + 1] ? fileData[x + 1][y] : 9;
          const downInt = parseInt(down);

          if (leftInt !== 9) traverse(x, y - 1, island, fileData)
          if (rightInt !== 9) traverse(x, y + 1, island, fileData);
          if (upInt !== 9) traverse(x - 1, y, island, fileData);
          if (downInt !== 9) traverse(x + 1, y, island, fileData);
          return false;
   
     
    };
    getBasin(fileData);
    let numOfIslands = basinCounter - 1;
    let islandsSums = [];
    islandsSums.length = numOfIslands;
    islandsSums.fill(0);

    for (let i = 0; i < basinArry.length; i++) {
      for (let j = 0; j < basinArry[i].length; j++) {
        if (basinArry[i][j] > 0) {
          if (!islandsSums[basinArry[i][j]]) {
            islandsSums[basinArry[i][j]] = 0;
          }
          islandsSums[basinArry[i][j]] += 1;
        }
      }
    }
    //islandsSums sorted in descending order
    islandsSums.sort((a, b) => b - a);

    console.log("islandsSums", islandsSums);
    //product of the largest 3 islands
    let product = 1;
    for (let i = 0; i < 3; i++) {
      product *= islandsSums[i];

    }
    console.log("product", product);
    // console.log("basinArry", basinArry);
    return {
      answer1: counterSum,
      answer2: "",
    };
  }, []);
  return (
    <ProblemBase
      title="problem 9"
      description="https://adventofcode.com/2021/day/9"
      solver={solver}
    ></ProblemBase>
  );
};

export default Problem9;
