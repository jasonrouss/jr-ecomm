import Product from "./pages/Product";

import Filter from "./components/Filter";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="md:flex   ">
        <Filter />
        <Product />
      </div>

      <Footer  />
    </div>
  );
};

export default App;
