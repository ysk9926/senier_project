import titleImg from "../Img/title.png";
import { Title, TitleText } from "../Style/HomeStyle";
import CustomBar from "../components/CustomBar/CustomBar";
import ImgGrid from "../components/Grid/ImgGrid";
import MainBar from "../components/MainBar/MainBar";

function Home() {
  return (
    <>
      <MainBar />
      <CustomBar />
      <Title>
        <TitleText src={titleImg} />
      </Title>
      <ImgGrid />
    </>
  );
}

export default Home;
