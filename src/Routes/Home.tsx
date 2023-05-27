import titleImg from "../Img/title.png";
import { Title, TitleText } from "../Style/HomeStyle";
import ImgGrid from "../components/ImgGrid";
import PlayBtn from "../components/PlayBtn";

function Home() {
  return (
    <>
      <PlayBtn />
      <Title>
        <TitleText src={titleImg} />
      </Title>
      <ImgGrid />
    </>
  );
}

export default Home;
