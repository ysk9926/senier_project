import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Reset } from "styled-reset";

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const BackgroundMain = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #bcc7b2;
  position: absolute;
  z-index: -1;
`;
const BackgroundFooter = styled.div`
  width: 100%;
  height: 136px;
  background-color: #b87d54;
  position: fixed;
  bottom: 0px;
`;

function Root() {
  return (
    <>
      <GlobalStyled />
      <Reset />

      <BackgroundFooter />
      <BackgroundMain />

      <Outlet />
    </>
  );
}

export default Root;
