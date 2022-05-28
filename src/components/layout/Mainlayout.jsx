import React from "react";
import Header from "../Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import * as routers from "router";
import Footer from "components/Footer";
import Loading from "../Loading/Loading";
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
      <Layout>
        <Loading />
        <Header />
        <Routes>{ShowContentChildren(routers.routerChildren)}</Routes>
        <Footer />
      </Layout>
    </>
  );
};
export default Mainlayout;
