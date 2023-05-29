import {
  Bar,
  Car,
  ImgGridWrapper,
  ImgWrapper,
  People,
} from "../../Style/HomeStyle";
import barImg from "../../Img/barL.png";
import carImg from "../../Img/carL.png";
import peopleImg from "../../Img/peopleL.png";
import CarBtn from "./CarBtn";
import PeopleBtn from "./PeopleBtn";
import RainBtn from "./RainBtn";

function ImgGrid() {
  return (
    <ImgGridWrapper>
      <ImgWrapper>
        <RainBtn />
        <CarBtn />
        <Car src={carImg} />
      </ImgWrapper>
      <ImgWrapper>
        <PeopleBtn />
        <People src={peopleImg} />
      </ImgWrapper>
      <ImgWrapper>
        <Bar src={barImg} />
      </ImgWrapper>
    </ImgGridWrapper>
  );
}

export default ImgGrid;
