import './App.scss';
import Navbar from "./layout/Navbar";
import CarouselSlider from './components/CarouselSlider';
import Advertise from './components/Advertise';
import Category from './components/Category';
import Products from './components/Products';
import OfferBanner from './components/OfferBanner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselSlider />
      <Advertise />
      <Category />
      <Products />
      <OfferBanner />
    </div>
  );
}

export default App;
