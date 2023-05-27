import styled from "styled-components";

export const ImgGridWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr 0.8fr;
  padding-inline: 50px;
  position: absolute;
  bottom: 120px;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Car = styled.img`
  width: 100%;
  max-width: 600px;
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
  padding-inline: 30px;
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
  padding-right: 30px;
`;

export const Title = styled.div`
  width: 361px;
  height: 73px;
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
  width: 218px;
  height: 79px;
`;
