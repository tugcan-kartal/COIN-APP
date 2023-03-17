import HeroView from "./features/HeroView";
import MarketView from "./features/MarketView";
import Navbar from "./features/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HeroView /> */}
      <MarketView />
    </div>
  );
}

export default App;
