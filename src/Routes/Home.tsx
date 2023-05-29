import titleImg from "../Img/title.png";
import { Title, TitleText } from "../Style/HomeStyle";
import ImgGrid from "../components/ImgGrid";
import PlayBar from "../components/PlayBtn";

function Home() {
  return (
    <>
      <PlayBar />
      <Title>
        <TitleText src={titleImg} />
      </Title>
      <ImgGrid />
    </>
  );
}

export default Home;
