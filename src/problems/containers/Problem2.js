import React, { useCallback, useEffect } from "react";

const Problem2 = () => {
  const [answer, setAnswer] = React.useState([{ forward: 0, depth: 0 }]);
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
    //Return the product of sum(x)*(sum(y)-sum(z))
    //example list: [forward 3, up 4, down 5, and forward 2] the product should be (3+2)*(5-4) = (5)*(1) = 5

    let tempForward = 0;
    let tempDepth = 0;

    for (let i = 0; i < dataList.length; i++) {
      const directionInstruction = dataList[i].toString().split(" ");
      const instruction = directionInstruction[0].toString();
      const value = parseInt(directionInstruction[1]);
      if (instruction === "forward") {
        tempForward += value;
      } else if (instruction === "up") {
        tempDepth -= value;
      } else if (instruction === "down") {
        tempDepth += value;
      }
    }

   
    setAnswer({
 
      forward: tempForward,
      depth: tempDepth,
    });
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
      <h3>Product: {answer.depth * answer.forward}</h3>
      <input type="file" onChange={readFile} />
    </div>
  );
};

export default Problem2;
