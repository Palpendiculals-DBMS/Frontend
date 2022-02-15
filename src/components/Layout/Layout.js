import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import MainNavigation from "./MainNavigator";

const Layout = (props) => {
  const location = useLocation();
  return (
    <>
      { location.pathname !== "/signup" && location.pathname !== "/login" ? <MainNavigation /> : null }
      <main>{ props.children }</main>
    </>
  );
};

export default Layout;
