import { motion } from "framer-motion";
import styled from "styled-components";

export const MotionVolT = styled(motion.div)`
  position: absolute;
  left: 0;
  z-index: -5;
  width: 155px;
  height: 40px;
  background: #292929 0% 0% no-repeat padding-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MusicVolInputT = styled(motion.input)`
  height: 5px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;

    height: 16px;
    width: 16px;
  }
`;
export const SvgT = styled.svg`
  width: 16px;
  height: 14px;
`;
export const PlayBtnT = styled(motion.button)`
  width: 30px;
  height: 30px;
  border: none;
  background-color: beige;
`;
export const Tinput = styled.input`
  width: 400px;
  height: 15px;
  -webkit-appearance: none;
  background-color: beige;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background-color: aqua;
    border-radius: 50%;
  }
  &::-webkit-slider-runnable-track {
    background: black;
  }
`;
