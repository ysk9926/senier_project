import {
  Bar,
  BarWrapper,
  Car,
  CarWrapper,
  ImgGridWrapper,
  ImgWrapper,
  People,
} from "../../Style/HomeStyle";
import barImg from "../../Img/barL.png";
import carImg from "../../Img/carL.png";
import peopleImg from "../../Img/peopleL.png";

function ImgGrid() {
  return (
    <ImgGridWrapper>
      <CarWrapper>
        <Car src={carImg} />
      </CarWrapper>
      <ImgWrapper>
        <People src={peopleImg} />
      </ImgWrapper>
      <BarWrapper>
        <Bar src={barImg} />
      </BarWrapper>
    </ImgGridWrapper>
  );
}

export default ImgGrid;
