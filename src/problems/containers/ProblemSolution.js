import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";

import Problem1 from "./Problem1";
import Problem2 from "./Problem2";
import Problem3 from "./Problem3";
import Problem4 from "./Problem4";
import Problem5 from "./Problem5";
import Problem6 from "./Problem6";
import classes from "./ProblemSolution.module.css";
// import classes from './ProblemSolution.module.css';


const ProblemSolution = () => {
  const params = useParams();
  const problemNumber = params.problemId;

  return (
    <Card className={classes.ProblemSolution}>
    
      {problemNumber === "1" && <Problem1 /> }
      {problemNumber === "2" && <Problem2 /> }
      {problemNumber === "3" && <Problem3 /> }
      {problemNumber === "4" && <Problem4 /> }
      {problemNumber === "5" && <Problem5 /> }
      {problemNumber === "6" && <Problem6 /> }
    </Card>
  );
};

export default ProblemSolution;
