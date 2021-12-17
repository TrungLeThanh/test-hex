import React, { useState } from "react";
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

function App() {
  const [pos, setPos] = useState({ x: 800, y: 300, scale: 1 });

  let arr = [];
  for (let i = 0; i < 1; i++) {
    arr.push({ key: i, color: "#c1c1c1", img: img });
  }

  const onScroll = (e) => {
    const delta = e.deltaY * -0.01;
    const newScale = pos.scale + delta;

    const ratio = 1 - newScale / pos.scale;

    setPos({
      scale: newScale,
      x: pos.x + (e.clientX - pos.x) * ratio,
      y: pos.y + (e.clientY - pos.y) * ratio,
    });
  };
  return (
    <div className="main">
      <div className="container">
        {arr?.map((item) => (
          <Hex
            onWheelCapture={onScroll}
            key={item?.key}
            $color={item?.color}
            $img={item?.img}
            style={{
              transformOrigin: "0 0",
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
