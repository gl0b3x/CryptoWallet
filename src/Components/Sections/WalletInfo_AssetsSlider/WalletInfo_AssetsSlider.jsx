import classes from "./WalletInfo_AssetsSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

const WalletInfo_AssetsSlider = () => {
  const assets = [
    [
      {
        id: "bitcoin",
        icon: "https://static.coinstats.app/coins/1650455588819.png",
        name: "Bitcoin",
      },
      {
        id: "ethereum",
        icon: "https://static.coinstats.app/coins/1650455629727.png",
        name: "Ethereum",
      },
      {
        id: "tether",
        icon: "https://static.coinstats.app/coins/1650455771843.png",
        name: "Tether",
      },
      {
        id: "binance-coin",
        icon: "https://static.coinstats.app/coins/1666608145347.png",
        name: "BNB",
      },
      {
        id: "solana",
        icon: "https://static.coinstats.app/coins/1701234596791.png",
        name: "Solana",
      },
      {
        id: "usd-coin",
        icon: "https://static.coinstats.app/coins/1650455825065.png",
        name: "USDC",
      },
      {
        id: "ripple",
        icon: "https://static.coinstats.app/coins/XRPdnqGJ.png",
        name: "XRP",
      },
      {
        id: "staked-ether",
        icon: "https://static.coinstats.app/coins/staked-etheruqt.png",
        name: "Lido Staked Ether",
      },
      {
        id: "dogecoin",
        icon: "https://static.coinstats.app/coins/DogecoinIZai5.png",
        name: "Dogecoin",
      },
      {
        id: "tron",
        icon: "https://static.coinstats.app/coins/TRONxJljY.png",
        name: "TRON",
      },
    ],
    [
      {
        id: "the-open-network",
        icon: "https://static.coinstats.app/coins/1685602314954.png",
        name: "Toncoin",
      },
      {
        id: "cardano",
        icon: "https://static.coinstats.app/coins/CardanojXddT.png",
        name: "Cardano",
      },
      {
        id: "avalanche-2",
        icon: "https://static.coinstats.app/coins/1675667082696.png",
        name: "Avalanche",
      },
      {
        id: "wrapped-bitcoin",
        icon: "https://static.coinstats.app/coins/wrapped-bitcoinoc1.png",
        name: "Wrapped Bitcoin",
      },
      {
        id: "shiba-inu",
        icon: "https://static.coinstats.app/coins/1646234478930.png",
        name: "Shiba Inu",
      },
      {
        id: "bitcoin-cash",
        icon: "https://static.coinstats.app/coins/1646234235578.png",
        name: "Bitcoin Cash",
      },
      {
        id: "chainlink",
        icon: "https://static.coinstats.app/coins/ChainLink0JkIR.png",
        name: "Chainlink",
      },
      {
        id: "polkadot",
        icon: "https://static.coinstats.app/coins/1641284295533.png",
        name: "Polkadot",
      },
      {
        id: "dai",
        icon: "https://static.coinstats.app/coins/1579614462667.png",
        name: "Dai",
      },
      {
        id: "uniswap",
        icon: "https://static.coinstats.app/coins/1687523907972.png",
        name: "Uniswap",
      },
    ],
    [
      {
        id: "litecoin",
        icon: "https://static.coinstats.app/coins/LitecoinGiD2Q.png",
        name: "Litecoin",
      },
      {
        id: "near",
        icon: "https://static.coinstats.app/coins/1700210628348.png",
        name: "NEAR Protocol",
      },
      {
        id: "kaspa",
        icon: "https://static.coinstats.app/coins/1653915370818.png",
        name: "Kaspa",
      },
      {
        id: "internet-computer",
        icon: "https://static.coinstats.app/coins/internet-computer4kw.png",
        name: "Internet Computer",
      },
      {
        id: "fetch-ai",
        icon: "https://static.coinstats.app/coins/1622462709278.png",
        name: "Artificial Superintelligence Alliance",
      },
      {
        id: "monero",
        icon: "https://static.coinstats.app/coins/MoneroxCKAn.png",
        name: "Monero",
      },
      {
        id: "pepe",
        icon: "https://static.coinstats.app/coins/1701674792194.png",
        name: "Pepe",
      },
      {
        id: "aptos",
        icon: "https://static.coinstats.app/coins/1669289234156.png",
        name: "Aptos",
      },
      {
        id: "stellar",
        icon: "https://static.coinstats.app/coins/1594216268358.png",
        name: "Stellar",
      },
      {
        id: "ethereum-classic",
        icon: "https://static.coinstats.app/coins/ethereum-classicPfU.png",
        name: "Ethereum Classic",
      },
    ],
  ];

  const renderAssets = (assetGroup) =>
    assetGroup.map((asset, index) => (
      <SwiperSlide key={index} className={classes.slideSwiper}>
        <div className={classes.assetImage}>
          <img src={asset.icon} alt={`${asset.name} icon`} loading="lazy" />
        </div>
        <div className={classes.assetName}>
          <span className={classes.assetId}>{asset.id}</span>
          <span className={classes.assetSymbol}>{asset.symbol}</span>
        </div>
      </SwiperSlide>
    ));

  const swiperConfig = {
    modules: [Autoplay],
    spaceBetween: 15,
    autoplay: { delay: 0, disableOnInteraction: false },
    loop: true,
    allowTouchMove: false,
    breakpoints: {
      320: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
      1440: { slidesPerView: 6 },
    },
  };

  return (
    <main className={classes.walletAssetsSlider}>
      <p className={classes.article}>
        One Platform, <span>Hundreds of Assets</span>
      </p>
      <div className={classes.swipers}>
        {assets.map((assetGroup, index) => (
          <Swiper
            key={index}
            {...swiperConfig}
            speed={index === 0 ? 2250 : index === 1 ? 3500 : 2500}
            className={classes.swiperAssets}
          >
            {renderAssets(assetGroup)}
          </Swiper>
        ))}
      </div>
    </main>
  );
};

export default WalletInfo_AssetsSlider;
