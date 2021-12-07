import React, { useCallback } from "react";
import { useEffect } from "react/cjs/react.development";
//lesson learned: parseInt
const Problem1 = (props) => {
  const [numberOfIncreasing, setNumberOfIncreasing] = React.useState(0);
  const [numberOfIncreasingSlidingWindow, setNumberOfIncreasingSlidingWindow] =
    React.useState(0);
  const [dataA, setDataA] = React.useState();
  const [hasData, setHasData] = React.useState(false);

  const readFile = async (e) => {
    const reader = new FileReader();
    const isFileSelected = !!e.target.files[0];
    if (!isFileSelected) {
      alert("Please select a file");
      return;
    }
    reader.readAsText(e.target.files[0]);

    reader.onload = async () => {
      const response = await reader.result;
      const dataSplit = response.split("\n");
      setDataA(dataSplit);
      setHasData(true);
    };
  };

  const getCountOfIncreasingSubsequences = useCallback(() => {
    let count = 0;
    for (let i = 1; i < dataA.length; i++) {
      if (parseInt(dataA[i - 1]) < parseInt(dataA[i])) {
        count++;
      }
    }
    setNumberOfIncreasing(count);
  }, [dataA]);
  const countIncreasingSumOfSlidingWindow = useCallback(
    (numberOfElements = 3) => {
      // arg1: array of numbers
      //arg2: number of elements in the sliding window

      //return:  the number of times the sum of total in the sliding window increases compared to the previous sum 
      let sum = 0;
      let count = 0;
      let slidingWindow = [];
      for (let i = 0; i < dataA.length; i++) {
        sum += parseInt(dataA[i]);
        slidingWindow.push(sum);
        if (i >= numberOfElements - 1) {
          sum -= parseInt(dataA[i - numberOfElements + 1]);
          slidingWindow.shift();
        }
        if (i > numberOfElements - 1) {
          if (slidingWindow[0] < slidingWindow[1]) {
            count++;
          }
        }
      }
      setNumberOfIncreasingSlidingWindow(count);
    },
    [dataA]
  );
  useEffect(() => {
    if (hasData) {
      getCountOfIncreasingSubsequences();
      countIncreasingSumOfSlidingWindow();
    }
  }, [
    hasData,
    dataA,
    getCountOfIncreasingSubsequences,
    countIncreasingSumOfSlidingWindow,
  ]);

  return (
    <div className="problem">
      <h3>Problem 1</h3>
      <p>
        Given a list of integers, write a function that returns total number of
        increasing subsequences in the list.
      </p>
      <p>
        For example, if the input is [1, 2, 3, 4, 5, 2 ], the first element is
        skiped. The total number of increasing subsequences is 4.
      </p>

      <h1>Number of Increasing subsequences: {numberOfIncreasing}</h1>
      
      <p>What is the number of times the sum of total in the sliding window increases compared to the previous sum ?</p>
      <h1>
        Number of Increasing subsequences slidingWindow:{" "}
        {numberOfIncreasingSlidingWindow}
      </h1>

      <input type="file" onChange={readFile} />
      {/* <label>Answer:</label>
        <textarea ></textarea> */}
      {hasData && (
        <button onClick={getCountOfIncreasingSubsequences}>Solve</button>
      )}
    </div>
  );
};

export default Problem1;
