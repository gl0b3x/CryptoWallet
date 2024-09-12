import Header from "../Components/Sections/Header/Header.jsx";
import CryptoSingePage from "../Components/Sections/CryptoSingePage/CryptoSingePage.jsx";
import Footer from "../Components/Sections/Footer/Footer.jsx";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const CryptoCurrencyPage = () => {
  const params = useParams();

  console.log(params);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          NexGen Wallet -{" "}
          {params.symbol[0].toUpperCase() + params.symbol.slice(1)} Charts
        </title>
      </Helmet>
      <Header />
      <CryptoSingePage />
      <Footer />
    </>
  );
};

export default CryptoCurrencyPage;
