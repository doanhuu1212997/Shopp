import { Spin, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./loading.css";

const Loading = () => {
  const loading = useSelector((state) => state.loading.loading);

  return (
    <>
      {loading && (
        <div className="backgroundLoader">
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      )}
    </>
  );
};

export default Loading;
