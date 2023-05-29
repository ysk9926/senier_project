import { CarBtnLabel, CarBtnWrapper, CarButton } from "../../Style/BtnStyle";

function CarBtn() {
  const onclick = () => {
    console.log("CarBtn Click");
  };
  return (
    <CarBtnWrapper>
      <CarButton id="rainBtn" onClick={onclick} />
      <CarBtnLabel htmlFor="rainBtn"> City Traffic </CarBtnLabel>
    </CarBtnWrapper>
  );
}

export default CarBtn;
