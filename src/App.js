import React from "react"
import Navbar from "./components/UI/Navbar"
import Footer from "./components/UI/Footer"
import Content from "./components/contents/Content"
import {BrowserRouter} from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          {/** Changeable content, by default is home **/}
          <Content/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
