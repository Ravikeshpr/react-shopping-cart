import React, { Fragment } from "react";
import NavItem from "./NavItem";

const Navigation = props => {
  return (
    <Fragment>
      <NavItem to={"/"} label="Home" isMenu={false} /> 
      <NavItem to={"/cart"} label="Cart" isMenu={false} /> 
    </Fragment>
  );
};

export default Navigation;
