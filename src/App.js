import "./App.css";
import Header from "./Components/Main/Header/Header";
import Navigation from "./Components/Main/Navigation/Navigation";
import Zahlungen from "./Components/Main/Zahlungen/Zahlungen";

function App() {
	return <div className="App">
    <Header />
    <Zahlungen />
    <Navigation />
  </div>;
}

export default App;
