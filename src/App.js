import './App.css';
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Header />
    <div className="wrapper">
   <Homepage /> 
   <Footer /> 
</div>
</>
  );
}

export default App;
