import React, { useCallback, useEffect } from "react";

const Problem2 = () => {
  const [answer, setAnswer] = React.useState([
    { solutionOne: 0, solutionTwo: 0 },
  ]);
  const [dataList, setDataList] = React.useState([{ forward: 0, depth: 0 }]);

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

      setDataList(dataSplit);
    };
  };

  const solve = useCallback(() => {
    // Given a list of consisting of forward x, down y, and up z. Where x is the number of steps forward, y is the depth up, and z is the depth down.
    //for solutionOne return the product of sum(x)*(sum(y)-sum(z))
    //example list: [forward 3, up 4, down 5, and forward 2] the product should be (3+2)*(5-4) = (5)*(1) = 5

    let tempForward = 0;
    let tempDepth = 0;
    // SolutionTwo
    
    //for solutionTwo return the sum of the product of foward * depth
    let tempAim = 0;
    let tempForwardTwo = 0;
    let tempDepthTwo = 0;

    for (let i = 0; i < dataList.length; i++) {
      const directionInstruction = dataList[i].toString().split(" ");
      const instruction = directionInstruction[0].toString();
      const value = parseInt(directionInstruction[1]);
      if (instruction === "forward") {
        tempForwardTwo += value;
        tempDepthTwo += tempAim * value;
        tempForward += value;
      } else if (instruction === "up") {
        tempAim -= value;
        tempDepth -= value;
      } else if (instruction === "down") {
        tempAim += value;
        tempDepth += value;
      }
    }

    setAnswer((prev) => ({
      ...prev,
      solutionOne: tempForward * tempDepth,
      solutionTwo: tempForwardTwo * tempDepthTwo,
    }));
  }, [dataList]);
  useEffect(() => {
    if (dataList.length > 0) {
      solve();
    }
  }, [dataList, solve]);
  return (
    <div className="problem">
      <h2>Problem 2</h2>
      <p>
        Given a list of consisting of forward x, down y, and up z. Where x is
        the number of steps forward, y is the height up, and z is the height
        down. Return the product of x*(y-z)
      </p>
      <p>
        For example, the input [forward 3, up 4, down 5, and forward 2] should
        give 5. The input [forward 1, down 2, up 0] should give 2.
      </p>
      <h3>
        Product: {answer.solutionOne} , Solution Two: {answer.solutionTwo}
      </h3>
      <input type="file" onChange={readFile} />
    </div>
  );
};

export default Problem2;
