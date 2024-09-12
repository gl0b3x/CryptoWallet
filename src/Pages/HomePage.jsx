import Header from "../Components/Sections/Header/Header.jsx";
import Main from "../Components/Sections/Home_MainComponent/Home_MainComponent.jsx";
import Home_Statistic from "../Components/Sections/Home_Statistic/Home_Statistic.jsx";
import Home_GetStartedSteps from "../Components/Sections/Home_GetStartedSteps/Home_GetStartedSteps.jsx";
import Home_MobileApp from "../Components/Sections/Home_MobileApp/Home_MobileApp.jsx";
import Home_Reasons from "../Components/Sections/Home_Reasons/Home_Reasons.jsx";
import Footer from "../Components/Sections/Footer/Footer.jsx";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NexGen Wallet - Best Crypto Wallet</title>
      </Helmet>
      <Header />
      <Main />
      <Home_Statistic />
      <Home_GetStartedSteps />
      <Home_MobileApp />
      <Home_Reasons />
      <Footer />
    </>
  );
};

export default HomePage;
