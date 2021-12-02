import React, { useCallback } from "react";
import { useEffect } from "react/cjs/react.development";

const Problem1 = (props) => {


  let data = null;
  const [numberOfIncreasing, setNumberOfIncreasing] = React.useState(0);
  const [dataA, setDataA] = React.useState();
  const [hasData, setHasData] = React.useState(false);
 
  const readFile = async (e) => {

    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = async () => {
      const response = await reader.result;
        data = response.split("\n");
        setDataA(data);
      console.log(data);
      setHasData(true);
    };
  };

  const countOfIncreasingSubsequences = useCallback(() => {
    let count = 0;
    if (dataA === null) {
      console.log("data is null");
      return;
    }
    for (let i = 1; i < dataA.length; i++) {
      if (dataA[i] > dataA[i - 1]) {
        count++;
      }
    }
    setNumberOfIncreasing(count);
  }, [dataA]);

  useEffect(()=>{
    if(hasData){
      countOfIncreasingSubsequences();
    }
  }, [hasData, dataA, countOfIncreasingSubsequences])
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
      <p>
        <b>Note:</b> The containers are sorted in ascending order.
      </p>

      <h1>Number of Increasing subsequences: {numberOfIncreasing}</h1>

      <input type="file" onChange={readFile} />
      {/* <label>Answer:</label>
        <textarea ></textarea> */}
      {hasData && (
        <button onClick={countOfIncreasingSubsequences}>Solve</button>
      )}
    </div>
  );
};

export default Problem1;
