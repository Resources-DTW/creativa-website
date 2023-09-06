import { styled } from "styled-components";
import HomePage from "./pages/HomePage";

const Main = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000;
  overflow: hidden;
`;

function App() {
  return (
    <Main>
      <HomePage />
    </Main>
  );
}

export default App;
