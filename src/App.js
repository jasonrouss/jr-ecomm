import Product from "./pages/Product";

import Filter from "./components/Filter";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
<Hero/>
      <div className="md:flex   ">
        <Filter />
        <Product />
      </div>

      <Footer  />
    </div>
  );
};

export default App;
