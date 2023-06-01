import styled from "styled-components";
import titleImg from "../Img/title.png";
import { HomeWrapper, Title, TitleText } from "../Style/HomeStyle";
import CustomBar from "../components/CustomBar/CustomBar";
import CarBtn from "../components/Grid/CarBtn";
import ImgGrid from "../components/Grid/ImgGrid";
import PeopleBtn from "../components/Grid/PeopleBtn";
import RainBtn from "../components/Grid/RainBtn";
import MainBar from "../components/MainBar/MainBar";

const BackgroundMain = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 700px;
  background-color: #bcc7b2;
  position: absolute;
  z-index: -1;
`;
const BackgroundFooter = styled.div`
  width: 100%;
  height: 120px;
  background-color: #b87d54;
  position: absolute;
  bottom: 0px;
`;

function Home() {
  return (
    <HomeWrapper>
      <MainBar />
      <CustomBar />
      <Title>
        <TitleText src={titleImg} />
      </Title>
      <CarBtn />
      <PeopleBtn />
      <RainBtn />
      <ImgGrid />

      <BackgroundFooter />
      <BackgroundMain />
    </HomeWrapper>
  );
}

export default Home;
