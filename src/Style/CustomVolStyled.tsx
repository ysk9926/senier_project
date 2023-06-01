import { motion } from "framer-motion";
import styled from "styled-components";

export const CustomVolBtn = styled(motion.button)`
  border: none;
  background: none;
`;

export const CustomVolControler = styled(motion.div)`
  z-index: -1;
  position: absolute;
  left: 0;
  width: 315px;
  height: 155px;
  background: #292929 0% 0% no-repeat padding-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CustomVolInput = styled.input`
  -webkit-appearance: none;
  width: 135px;
  height: 21px;
  border-radius: 11px;
  outline: none;
  background-color: #4a4a4a;
  overflow: hidden;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: #bcc7b2;
    box-shadow: -142px 0 0 137px #637551;
    cursor: pointer;
  }
`;

export const LabelWrapper = styled.div`
  width: 230px;
  height: 23px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0;
`;

export const CustomLabel = styled.label`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
`;
