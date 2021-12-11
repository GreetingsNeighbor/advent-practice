import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";

import Problem1 from "./Problem1";
import Problem2 from "./Problem2";
import Problem3 from "./Problem3";
import Problem4 from "./Problem4";
import Problem5 from "./Problem5";
import Problem6 from "./Problem6";
import Problem7 from "./Problem7";
import Problem8 from "./Problem8";
import Problem9 from "./Problem9";
import Problem10 from "./Problem10";
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
      {problemNumber === "7" && <Problem7 /> }
      {problemNumber === "8" && <Problem8 /> }
      {problemNumber === "9" && <Problem9 /> }
      {problemNumber === "10" && <Problem10 /> }
    </Card>
  );
};

export default ProblemSolution;
