import React from "react"
import Navbar from "./components/UI/Navbar"
import Footer from "./components/UI/Footer"
import ContentSwitch from "./components/contents/ContentSwitch"
import {BrowserRouter} from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          {/** Changeable content, by default is home **/}
          <ContentSwitch/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
