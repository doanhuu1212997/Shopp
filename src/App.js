import logo from './logo.svg';
import './App.css';

import * as routers from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import { ToastContainer } from 'react-toastify';
function App() {
  const showContentComponents = (routers) => {
    let results = null;
    if (routers.length > 0) {
      results = routers.map((router, index) => {
        return (
          <Route key={index} path={router.path} element={router.element} />
        );
      });
    }
    return results;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {showContentComponents(routers.router)}
          {showContentComponents(routers.routerLayout)}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
