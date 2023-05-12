import { Reset } from "styled-reset";
import "./App.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { defaultTheme } from "./theme";
import Router from "./Router";

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Reset />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
