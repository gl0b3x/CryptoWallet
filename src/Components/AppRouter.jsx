import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage.jsx";
import PricesPage from "../Pages/PricesPage.jsx";
import CryptoCurrencyPage from "../Pages/CryptoCurrencyPage.jsx";
import WalletPage from "../Pages/WalletPage.jsx";
import ScrollToTop from "./Tools/ScrollToTop.js";
import ScrollToTopButton from "./Tools/ScrollToTopButton.jsx";
import AboutPage from "../Pages/AboutPage.jsx";
import CardPage from "../Pages/CardPage.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route
          path="/cryptocurrency/:symbol"
          element={<CryptoCurrencyPage />}
        />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
