import React, { useCallback } from "react";
import ProblemBase from "../components/ProblemBase";

const Problem12 = () => {
  const solver = useCallback((fileData) => {
    
    return {
      answer1: "",
      answer2: "",
    };
  }, []);
  return (
    <ProblemBase
      title="problem 12"
      description="https://adventofcode.com/2021/day/11"
      solver={solver}
    ></ProblemBase>
  );
};

export default Problem12;
