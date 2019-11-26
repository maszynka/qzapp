import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppWrap from "./App.styles";
import GlobalStyles from "./global.styles";

import { Header } from "./components/Header/Header";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <AppWrap className="App">
                <Header />
                <Content/>
            </AppWrap>
        </BrowserRouter>
    );
};

export default App;
