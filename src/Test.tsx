import React from "react";
import styled from "styled-components";
import VolControl from "./components/MainBar/VolumControl";
import VolTest from "./testComponent/volumetest";
import { Tinput } from "./testComponent/testStyle";

const RangeInput = styled.input`
  -webkit-appearance: none;
  background-color: beige;
  display: flex;
  height: 6px;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 100;

  &:focus {
    outline: none;
  }

  & .track {
    background: green;
    border-radius: 0 8px 8px 0;
    height: 100%;
  }

  & .filler {
    background: green !important;
    border-radius: 0;
  }

  & .track-full {
    background: green;
    border-radius: 50px;
    height: 100%;
    margin: 0 18px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: calc(100% - 36px);
    z-index: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: green;
    border: 10 solid blue;
    border-radius: 50px;
    color: blue;
    cursor: pointer;
    height: 16px;
    width: 16px;
  }
`;

const LevelInput = styled.div`
  width: 150px;
  height: 30px;
  border-radius: 8px;
  min-width: 150px;
  z-index: 400;

  & .level-thumb {
    -webkit-filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
    height: 24px;
    pointer-events: none;
    width: 24px;
  }

  & .locked-level {
    cursor: pointer !important;
    height: 38px;
    margin-left: -7px;
    margin-top: -3px;
    opacity: 0.55;
    width: 38px;
    z-index: 999999999999999;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Test() {
  return (
    <Wrapper>
      <VolTest />
      <Tinput type="range" min="0" max="1" step="0.01" />
    </Wrapper>
  );
}
export default Test;
