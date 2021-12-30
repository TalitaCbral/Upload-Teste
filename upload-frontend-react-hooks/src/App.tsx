import React from "react";

import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";

import Upload from "./components/Upload";
import FileList from "./components/FileList";

import logo from "./img/bannerlogo.png";

import { FileProvider } from "./context/files";
const App: React.FC = () => (
  <FileProvider>
    <Container>
      <Content>
        <img src={logo} />
        <Upload />
        <FileList />
      </Content>
      <GlobalStyle />
    </Container>
  </FileProvider>
)


export default App;
