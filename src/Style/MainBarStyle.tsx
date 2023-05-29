import styled from "styled-components";
import { motion } from "framer-motion";

export const PlayBtnWrapper = styled.div`
  width: 155px;
  height: 35px;
  background: #292929 0% 0% no-repeat padding-box;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 15px;
  padding-top: 3px;
  position: relative;
`;
export const PlayBtn = styled(motion.button)`
  border: none;
  background: none;
`;
export const PlaySvg = styled.svg`
  width: 11px;
  height: 14px;
`;

export const BackSvg = styled.svg`
  width: 17px;
  height: 11px;
`;

export const NextSvg = styled.svg`
  width: 17px;
  height: 11px;
`;

export const SoundSvg = styled.svg`
  width: 16px;
  height: 14px;
`;

export const MuteBtnWrapper = styled.div`
  width: 35px;
  height: 35px;
  background: #292929 0% 0% no-repeat padding-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MuteSvg = styled.svg`
  width: 16px;
  height: 14px;
`;

export const MenuBtnWrapper = styled.div`
  width: 35px;
  height: 35px;
  background: #292929 0% 0% no-repeat padding-box;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuSvg = styled.svg`
  width: 19px;
  height: 16px;
`;

export const MotionVol = styled(motion.div)`
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
