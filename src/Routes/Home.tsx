import styled from "styled-components";
import barImg from "../Img/barL.png";
import carImg from "../Img/carL.png";
import peopleImg from "../Img/peopleL.png";

function Home() {
  const ImgGrid = styled.div`
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr 0.8fr;
    position: absolute;
    bottom: 136px;
  `;
  const ImgWrapper = styled.div`
    width: 100%;
    position: relative;
  `;

  const CarImg = styled.img`
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
  const PeopleImg = styled.img`
    width: 100%;
    max-width: 460px;

    max-height: 310px;
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: bottom center;
  `;
  const BarImg = styled.img`
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

  return (
    <>
      <ImgGrid>
        <ImgWrapper>
          <CarImg src={carImg} />
        </ImgWrapper>
        <ImgWrapper>
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
