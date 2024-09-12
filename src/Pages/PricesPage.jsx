import Header from "../Components/Sections/Header/Header.jsx";
import CurrenciesPreview from "../Components/Sections/PopularCrypto/PopularCrypto.jsx";
import ListOfCurrencies from "../Components/Sections/ListOfCurrencies/ListOfCurrencies.jsx";
import Footer from "../Components/Sections/Footer/Footer.jsx";
import { Helmet } from "react-helmet";

const PricesPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NexGen Wallet - Prices Of All Crypto</title>
      </Helmet>
      <Header />
      <CurrenciesPreview />
      <ListOfCurrencies />
      <Footer />
    </>
  );
};

export default PricesPage;
