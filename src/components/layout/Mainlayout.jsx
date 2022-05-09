import React from "react";
import Header from "../Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as routers from "router";
const Mainlayout = () => {
  const ShowContentChildren = (routers) => {
    let results = null;
    if (routers.length > 0) {
      results = routers.map((router, index) => {
        return (
          <Route
            key={index}
            exact={true}
            path={router.path}
            element={router.element}
          />
        );
      });
    }
    return results;
  };

  return (
    <>
      {" "}
      <Header />
      <Routes>{ShowContentChildren(routers.routerChildren)}</Routes>
      <h1>111</h1>
    </>
  );
};
export default Mainlayout;
