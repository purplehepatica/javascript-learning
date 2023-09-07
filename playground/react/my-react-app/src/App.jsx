import './App.css'
import FruitButton from "./components/FruitButton.jsx";

function App() {

  return (
      <div>
        <FruitButton fruit={"Apple"} />
        <FruitButton fruit={"Banana"} />
        <FruitButton fruit={"Kiwi"} />
      </div>
  );
}

export default App
