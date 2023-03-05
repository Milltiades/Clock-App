import { createGlobalStyle } from "styled-components";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <MainComponent/>
      
    </div>
  );
}

export default App;



const GlobalStyles = createGlobalStyle`
  
:root {
font-synthesis: none;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: 100%;
}
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Inter', sans-serif;
overflow: hidden;


}
body {
min-width: 320px;
min-height: 100vh;
}
button {
  cursor: pointer;
}

`;
