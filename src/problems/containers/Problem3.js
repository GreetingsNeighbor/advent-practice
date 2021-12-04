import React, { useCallback } from "react";
import ProblemBase from "../components/ProblemBase";

const Problem3 = () => {
  const solver = useCallback((fileData) => {
    let tempArrMostCommon = [];
    let tempArrLeastCommon = [];

    let isFirst = true;

    let common0 = []; // 0
    let common1 = []; // 1

    let common0binary = "";
    let common1binary = "";

    for (let i = 0; i < fileData.length; i++) {
      let line = fileData[i];
      if (isFirst) {
        tempArrMostCommon.length = line.length;
        tempArrMostCommon.fill(0);
        tempArrLeastCommon.length = line.length;
        tempArrMostCommon.fill(0);
        isFirst = false;
      }

      if (line.length !== tempArrMostCommon.length) {
        continue;
      }

      for (let j = 0; j < line.length; j++) {
        if (0 === parseInt(line[j])) {
          tempArrMostCommon[j] = tempArrMostCommon[j] - 1;
        } else {
          tempArrMostCommon[j] = tempArrMostCommon[j] + 1;
        }
      }

      if (parseInt(line[0]) === 0) {
        common0.push(line.substring(1));
      } else if (parseInt(line[0]) === 1) {
        common1.push(line.substring(1));
      } else {
        common0.push(line.substring(1));
        common1.push(line.substring(1));
      }
    }

    for (let k = 0; k < tempArrMostCommon.length; k++) {
      if (tempArrMostCommon[k] > 0) {
        tempArrMostCommon[k] = 1;
        tempArrLeastCommon[k] = 0;
      } else {
        tempArrLeastCommon[k] = 1;
        tempArrMostCommon[k] = 0;
      }
    }

    //for the most 1s
    if (common1.length > common0.length) {
    } else {
      //swap common0 and common1
      let temp = common0;
      common0 = common1.slice();
      common1 = temp.slice();
    }
    common0binary = "0";
    common1binary = "1";

    while (common1binary.length < tempArrMostCommon.length) {
      let temp1 = [];
      let temp0 = [];
      let count = 0;
      for (let i = 0; i < common1.length; i++) {
        let line = common1[i];
        if (line.length === 0) {
          continue;
        }

        if (1 === parseInt(line[0])) {
          temp1.push(line.substring(1));

          count++;
        } else {
          temp0.push(line.substring(1));
          count--;
        }
      }

      if (count > 0) {
        common1 = temp1.slice();
        common1binary += "1";
      } else if (count < 0) {
        common1binary += "0";
        common1 = temp0.slice();
      } else {
        common1binary += "1";
        common1 = temp1.slice();
      }
    }

    while (common0binary.length < tempArrMostCommon.length) {
      let temp1 = [];
      let temp0 = [];
      let count = 0;
      if(common0.length === 1){
        common0binary += common0;
    
        break;
      }
      for (let i = 0; i < common0.length; i++) {
        let line = common0[i];
        if (line.length === 0) {
          continue;
        }

        if (1 === parseInt(line[0])) {
          temp1.push(line.substring(1));

          count++;
        } else {
          temp0.push(line.substring(1));
          count--;
        }
      }

      if (count < 0) {
        common0 = temp1.slice();
        common0binary += "1";
      } else if (count > 0) {
        common0binary += "0";
        common0 = temp0.slice();
      } else {
        common0 = temp0.slice();
        common0binary += "0";
      }

    }

    //convert to binary
    const binary1 = tempArrMostCommon.join("");
    //convert binary string to decimal
    const decimal1 = parseInt(binary1, 2);

    const binary2 = tempArrLeastCommon.join("");
    const decimal2 = parseInt(binary2, 2);

    const decimalCommon0 = parseInt(common0binary, 2);
    const decimalCommon1 = parseInt(common1binary, 2);
    console.log(
      "decimalCommon1",
      decimalCommon1,
      "decimalCommon0",
      decimalCommon0
    );
    //oxygenRating: the most common value (0 or 1) in the current bit position
    //co2ScrubberRating: least common value

    return {
      answer1: decimal1 * decimal2,
      answer2: decimalCommon0 * decimalCommon1,
    };
  }, []);
  return (
    <ProblemBase
      title="Problem 3"
      description="Problem description"
      solver={solver}
    />
  );
};

export default Problem3;
