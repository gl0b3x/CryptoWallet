import Header from "../Components/Sections/Header/Header.jsx";
import WalletInfo_Start from "../Components/Sections/WalletInfo_Start/WalletInfo_Start.jsx";
import WalletInfo_Advantages from "../Components/Sections/WalletInfo_Advantages/WalletInfo_Advantages.jsx";
import Footer from "../Components/Sections/Footer/Footer.jsx";
import WalletInfo_Multichain from "../Components/Sections/WalletInfo_Multichain/WalletInfo_Multichain.jsx";
import WalletInfo_App from "../Components/Sections/WalletInfo_App/WalletInfo_App.jsx";
import WalletInfo_AssetsSlider from "../Components/Sections/WalletInfo_AssetsSlider/WalletInfo_AssetsSlider.jsx";
import { Helmet } from "react-helmet";

const WalletPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NexGen Wallet - Buy, Sell and Manage Your Crypto</title>
      </Helmet>
      <Header />
      <WalletInfo_Start />
      <WalletInfo_AssetsSlider />
      <WalletInfo_Advantages />
      <WalletInfo_Multichain />
      <WalletInfo_App />
      <Footer />
    </>
  );
};

export default WalletPage;
