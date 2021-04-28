import "./App.css";
import Details from "./components/Details";
import Footer from "./components/Footer";
import JumboTron from "./components/JumboTron";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <NavBar />
      <JumboTron/>
      <Details/>
      <Footer/>
      
      

     
    </div>
    
  );
}
export default App;
