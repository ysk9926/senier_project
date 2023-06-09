import {
  PeopleBtnLabel,
  PeopleBtnWrapper,
  PeopleButton,
} from "../../Style/BtnStyle";

function PeopleBtn() {
  const onClick = () => {
    console.log("PeopleBtn clicked");
  };
  return (
    <PeopleBtnWrapper>
      <PeopleButton id="rainBtn" onClick={onClick} />
      <PeopleBtnLabel htmlFor="rainBtn"> Whispers People </PeopleBtnLabel>
    </PeopleBtnWrapper>
  );
}

export default PeopleBtn;
