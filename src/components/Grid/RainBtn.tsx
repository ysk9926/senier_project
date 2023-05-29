import { RainBtnLabel, RainBtnWrapper, RainButton } from "../../Style/BtnStyle";

function RainBtn() {
  const onclick = () => {
    console.log("RainBtn Clicked");
  };
  return (
    <RainBtnWrapper>
      <RainButton id="rainBtn" onClick={onclick} />
      <RainBtnLabel htmlFor="rainBtn"> City Rain </RainBtnLabel>
    </RainBtnWrapper>
  );
}

export default RainBtn;
