import React, { useState } from "react";
import { Modal } from "antd";
import "./App.css";
import img from "./1915.jpg";
import styled, { css } from "styled-components";

export const Hex = styled.div`
  &:hover {
    ${({ $img }) =>
      $img &&
      css`
        background-image: url(${$img});
      `}
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  &::before {
    content: "";
    width: calc(100px / 2 + 1px);
    float: left;
    height: 120%;
    shape-outside: repeating-linear-gradient(
      #0000 0 calc(calc(1.732 * 100px + 4 * 1px - 1px) - 3px),
      #000 0 calc(1.732 * 100px + 4 * 1px - 1px)
    );
  }

  width: 100px;
  margin: 1px;
  height: calc(100px * 1.1547);
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  background: ${({ $color }) => $color || "black"};
  margin-bottom: calc(1px - 115px * 0.2885);
  overflow: hidden;
`;

export const Md = styled(Modal)`
  overflow: hidden;
  max-height: 100vh;

  &.ant-modal {
    max-width: unset;
    margin: 0 !important;
    top: 0;
    bottom: 0;
  }
`;

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  let arr = [];
  for (let i = 0; i < 70; i++) {
    arr.push({ key: i, color: "#c1c1c1", img: img });
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="main">
      {
        <Md
          title={null}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width="100%"
          closable={false}
        >
          <img src={img} alt="" onClick={handleCancel} />
        </Md>
      }
      <div className="container">
        {arr?.map((item) => (
          <Hex
            key={item?.key}
            $color={item?.color}
            $img={item?.img}
            onClick={showModal}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
