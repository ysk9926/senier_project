import { QueryClient, QueryClientProvider } from "react-query";
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

const client = new QueryClient();

function Root() {
  return (
    <>
      <QueryClientProvider client={client}>
        <GlobalStyled />
        <Reset />

        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default Root;
