import React, { PureComponent } from "react";

import { Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import './styles/app.module.css'
import About from "./pages/about";

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    );
  }
}

export default App;
