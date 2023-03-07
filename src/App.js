import React from "react"
import Navbar from "./components/UI/Navbar"
import Footer from "./components/UI/Footer"
import ContentSwitch from "./components/contents/ContentSwitch"
import {HashRouter} from "react-router-dom"

function App() {

  return (
    <div>
      <HashRouter>
        <Navbar/>
          {/** Changeable content, by default is home **/}
          <ContentSwitch/>
          <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
