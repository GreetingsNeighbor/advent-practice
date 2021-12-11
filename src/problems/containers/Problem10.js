import React, { useCallback } from "react";
import ProblemBase from "../components/ProblemBase";

const Problem10 = () => {
  const solver = useCallback((fileData) => {
    let closingSyntexMap = {
      ")": "(",
      "]": "[",
      "}": "{",
      ">": "<",
    };
    let closingPointsMap = {
      ")": 3,
      "]": 57,
      "}": 1197,
      ">": 25137,
    };
    let openingSyntexMap = {
      "(": 1,
      "[": 2,
      "{": 3,
      "<": 4,
    };

    let syntexsLines = fileData;

    let firstErrors = syntexsLines.map((line) => {
      let linesyntexs = line.split("");
      let syntexList = [];
      for (const syntex of linesyntexs) {
        if (closingSyntexMap[syntex]) {
          if (syntexList.lastIndexOf(closingSyntexMap[syntex]) === -1)
            return syntex.toString();
          else if (
            syntexList[syntexList.length - 1].toString() !==
            closingSyntexMap[syntex].toString()
          )
            return syntex.toString();
          else syntexList.pop();
        } else {
          syntexList.push(syntex);
        }
      }
    });

    const sum = firstErrors.reduce((acc, curr) => {
      if (curr) return acc + closingPointsMap[curr];
      else return acc;
    }, 0);

    let incompleteSyntexs = syntexsLines.map((line) => {
      let linesyntexs = line.split("");
      let syntexList = [];
      for (const syntex of linesyntexs) {
        if (closingSyntexMap[syntex]) {
          if (syntexList.lastIndexOf(closingSyntexMap[syntex]) === -1)
            return undefined;
          else if (
            syntexList[syntexList.length - 1].toString() !==
            closingSyntexMap[syntex].toString()
          )
            return undefined;
          else syntexList.pop();
        } else {
          syntexList.push(syntex);
        }
      }
      return syntexList;
    });

    let incompleteSyntexSums = [];
    incompleteSyntexs.forEach((element) => {
      if (element) {
     
        let tempSum = element.reverse().reduce((acc, curr) => {
          return acc * 5 + openingSyntexMap[curr];
        }, 0)
        incompleteSyntexSums.push(tempSum);
      }
    });
    const medium=incompleteSyntexSums.sort((a,b)=>a-b)[Math.floor((incompleteSyntexSums.length)/2)]
    console.log(firstErrors, sum, incompleteSyntexs, );
    return {
      answer1: sum,
      answer2: medium,
    };
  }, []);
  return (
    <ProblemBase
      title="problem 10"
      description="https://adventofcode.com/2021/day/10"
      solver={solver}
    ></ProblemBase>
  );
};

export default Problem10;
