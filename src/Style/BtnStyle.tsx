import styled from "styled-components";

export const RainBtnWrapper = styled.div`
  height: 40px;
  width: 200px;
  z-index: 99;
  position: absolute;
  left: 15%;
  bottom: 550px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1400px) {
    top: 230px;
    left: 5%;
  }
`;
export const RainButton = styled.button`
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
  height: 40px;
  width: 200px;
  z-index: 99;
  position: absolute;
  right: 70%;
  bottom: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1400px) {
    top: 310px;
    left: 5%;
  }
`;
export const CarButton = styled.button`
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
  height: 40px;
  width: 200px;
  z-index: 99;
  position: absolute;
  left: 45%;
  top: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 951px) and (max-width: 1400px) {
    left: 27%;
    top: 40%;
  }
  @media (max-width: 950px) {
    top: 150px;
    left: 5%;
  }
`;
export const PeopleButton = styled.button`
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
