import styled from "styled-components";
import barImg from "../Img/barL.png";
import carImg from "../Img/carL.png";
import peopleImg from "../Img/peopleL.png";
import titleImg from "../Img/title.png";
import {
  BarImg,
  CarBtn,
  CarBtnLabel,
  CarBtnWrapper,
  CarImg,
  ImgGrid,
  ImgWrapper,
  PeopleBtn,
  PeopleBtnLabel,
  PeopleBtnWrapper,
  PeopleImg,
  RainBtn,
  RainBtnLabel,
  RainBtnWrapper,
  Title,
  TitleText,
} from "../Style/HomeStyle";

function Home() {
  return (
    <>
      <Title>
        <TitleText src={titleImg} />
      </Title>
      <ImgGrid>
        <ImgWrapper>
          <RainBtnWrapper>
            <RainBtn id="rainBtn" />
            <RainBtnLabel htmlFor="rainBtn"> City Rain </RainBtnLabel>
          </RainBtnWrapper>
          <CarBtnWrapper>
            <CarBtn id="rainBtn" />
            <CarBtnLabel htmlFor="rainBtn"> City Traffic </CarBtnLabel>
          </CarBtnWrapper>
          <CarImg src={carImg} />
        </ImgWrapper>
        <ImgWrapper>
          <PeopleBtnWrapper>
            <PeopleBtn id="rainBtn" />
            <PeopleBtnLabel htmlFor="rainBtn"> Coge People </PeopleBtnLabel>
          </PeopleBtnWrapper>
          <PeopleImg src={peopleImg} />
        </ImgWrapper>
        <ImgWrapper>
          <BarImg src={barImg} />
        </ImgWrapper>
      </ImgGrid>
    </>
  );
}

export default Home;
