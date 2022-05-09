import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./loading.css";

const Loading = () => {
  const loading = useSelector((state) => state.loading.loading);

  return (
    <>
      {loading && (
        <div className="backgroundLoader">
          <Spin size="large" />
        </div>
      )}
    </>
  );
};

export default Loading;
