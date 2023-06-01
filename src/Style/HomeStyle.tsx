import { motion } from "framer-motion";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  min-height: 700px;
`;

export const ImgGridWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding-inline: 50px;
  position: absolute;
  bottom: 120px;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const CarWrapper = styled.div`
  width: 100%;
  position: relative;
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

export const Car = styled.img`
  width: 100%;
  max-width: 520px;
  max-height: 470px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: bottom center;
  padding-left: 30px;
`;
export const People = styled.img`
  width: 100%;
  max-width: 460px;
  max-height: 310px;
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: bottom center;
  padding-inline: 10px;
`;

export const BarWrapper = styled.div`
  width: 100%;
  position: relative;
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const Bar = styled.img`
  width: 100%;
  max-width: 390px;
  max-height: 460px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: bottom center;
`;

export const Title = styled.div`
  max-width: 360px;
  min-height: 50px;
  min-width: 200px;
  width: 15%;
  height: 7%;
  background: #292929 0% 0% no-repeat padding-box;
  border-radius: 0px 6px 6px 0px;
  opacity: 1;
  position: absolute;
  top: 30px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleText = styled.img`
  width: 70%;
  height: 100%;
  max-width: 218px;
`;
