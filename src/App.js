import Navbar from "./components/UI/Navbar"
import Footer from "./components/UI/Footer"
import Content from "./components/contents/Content"

function App() {

  return (
    <div>
      <Navbar/>

      {/** Changeable content, by default is home **/}
      <Content/>

      <Footer/>
    </div>
  );
}

export default App;
