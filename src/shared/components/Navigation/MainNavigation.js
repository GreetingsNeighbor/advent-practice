import React from "react";
import MainHeader from "./MainHeader";
import classes from "./MainNavigation.module.css";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <MainHeader className={classes.MainNavigation}>
        <h2 className={classes["MainNavigation__title"]}>Play, Practice, Peace..</h2>
      <NavLinks />
    </MainHeader>
  );
};

export default MainNavigation;
