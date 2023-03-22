import FooterView from "./features/FooterView";
import HeroView from "./features/HeroView";
import MarketView from "./features/MarketView";
import Navbar from "./features/Navbar";
import WhyChooseUs from "./features/WhyChooseUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroView />
      <MarketView />
      <WhyChooseUs />
      <FooterView />
    </div>
  );
}

export default App;
