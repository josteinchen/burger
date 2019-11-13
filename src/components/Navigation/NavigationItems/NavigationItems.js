import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItem/NaviagationItem";

const NavigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link='/Orders'>Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
