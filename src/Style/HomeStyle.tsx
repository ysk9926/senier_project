import styled from "styled-components";

export const ImgGrid = styled.div`
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

export const CarImg = styled.img`
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
export const PeopleImg = styled.img`
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
export const BarImg = styled.img`
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
export const RainBtnWrapper = styled.div`
  position: absolute;
  right: 30%;
  top: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RainBtn = styled.button`
  background: none;
  border: 3px solid white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
export const RainBtnLabel = styled.label`
  background-color: #36323130;
  height: 33px;
  width: 111px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-left: 10px;
  padding-bottom: 3px;
  border-radius: 10px;
  color: #58644d;
`;
export const CarBtnWrapper = styled.div`
  position: absolute;
  right: 20%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CarBtn = styled.button`
  background: none;
  border: 3px solid white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
export const CarBtnLabel = styled.label`
  background-color: #2a6aaa30;
  height: 33px;
  width: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-left: 10px;
  padding-bottom: 3px;
  border-radius: 10px;
  color: #58644d;
`;
export const PeopleBtnWrapper = styled.div`
  position: absolute;
  right: 20%;
  top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PeopleBtn = styled.button`
  background: none;
  border: 3px solid white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
export const PeopleBtnLabel = styled.label`
  background-color: #e5583530;
  height: 33px;
  width: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-left: 10px;
  padding-bottom: 3px;
  border-radius: 10px;
  color: #58644d;
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
