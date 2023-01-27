import './App.scss';
import Navbar from "./layout/Navbar";
import CarouselSlider from './components/CarouselSlider';
import Advertise from './components/Advertise';
import Category from './components/Category';
import Products from './components/Products';
import OfferBanner from './components/OfferBanner';
import ProductSlider from './components/ProductSlider';
import AdBanner from './components/AdBanner';
import ProductsRec from './components/ProductsRec';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselSlider />
      <Advertise />
      <Category />
      <Products />
      <OfferBanner />
      <ProductSlider />
      <AdBanner />
      <ProductsRec />
    </div>
  );
}

export default App;
