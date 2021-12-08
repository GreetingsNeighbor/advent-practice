import React, { useCallback } from "react";
import ProblemBase from "../components/ProblemBase";

const Problem8 = () => {
  const solver = useCallback((fileData) => {
    //input is an array of lines of strings
    //i.e
    /*
        bfdcga cgdfe egfda cbfeda ec efc gcfbd ebcg gdfbec adcgfeb | bgdfc ec dfgae gefcd
        cafgbd bc gfdbae eacfb cbf debaf cdgefba fecag fbcdae ecbd | cdfabg cb adgfcb bface
    */
    //return total count where lengths of output are lengths [2,3,4,7]
    let lengthsOfNumbersToMatch = [2, 3, 4, 7];
    let count = 0;
    
    const listOfdigitOutput = fileData.map((line) => line.split(" | ")[1]);
    const individualDigitsByLine = listOfdigitOutput.map((line) => line.split(" "));

    individualDigitsByLine.map((input) =>
      input.map((digit) =>
        lengthsOfNumbersToMatch.includes(digit.length) ? count++ : 0
      )
    );

    console.log(
      "individualDigitsByLine",
      individualDigitsByLine,
      "countMatches",
      count
    );

    return {
      answer1: "",
      answer2: "",
    };
  }, []);
  return (
    <ProblemBase
      title="problem 8"
      description="https://adventofcode.com/2021/day/8"
      solver={solver}
    ></ProblemBase>
  );
};

export default Problem8;
