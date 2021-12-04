import React, { useCallback } from "react";
import ProblemBase from "../components/ProblemBase";

const Problem3 = () => {
  const solver = useCallback((fileData) => {
    let tempArrMostCommon = [];
    let tempArrLeastCommon = [];
    let isFirst = true;

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

      console.log("line length", line.length);

      for (let j = 0; j < line.length; j++) {
        if (0 === parseInt(line[j])) {
          tempArrMostCommon[j] = tempArrMostCommon[j] - 1;
        } else {
          tempArrMostCommon[j] = tempArrMostCommon[j] + 1;
        
        }
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
    //convert to binary
    const binary1 = tempArrMostCommon.join("");
    //convert binary string to decimal
    const decimal1 = parseInt(binary1, 2);

    const binary2 = tempArrLeastCommon.join("");
    const decimal2 = parseInt(binary2, 2);
    return { answer1: decimal1 * decimal2, answer2: "null" };
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
