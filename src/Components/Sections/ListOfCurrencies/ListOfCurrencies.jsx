import classes from "./ListOfCurrencies.module.css";
import { motion } from "framer-motion";
import Api from "../../../Api/Api.js";
import { useState, useEffect } from "react";
import NumberFormatter from "../../Tools/NumberFormatter.jsx";
import FormatPrice from "../../Tools/FormatPrice.jsx";
import { Link } from "react-router-dom";
import SelectTimeRange from "../../UI/SelectTimeRange/SelectTimeRange.jsx";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";
import Pagination from "../../UI/Pagination/Pagination.jsx";
import SkeletonLoading from "../../Tools/SkeletonLoading.jsx";

const ListOfCurrencies = () => {
  const [loading, setLoading] = useState(false);
  const [timeChange, setTimeChange] = useState("priceChange1d");
  const [currencies, setCurrencies] = useState([]);
  const [sortedCurrencies, setSortedCurrencies] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "rank",
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);
    async function getCoinsData() {
      try {
        const response = await Api.getAllCrypto({
          limit: "100",
          page: currentPage,
        });
        setCurrencies(response.data.result);
        setPageCount(response.data.meta.pageCount);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getCoinsData();
  }, [currentPage]);

  useEffect(() => {
    const sortedData = [...currencies].sort((a, b) => {
      let aValue, bValue;

      if (sortConfig.key === "change") {
        aValue = a[timeChange];
        bValue = b[timeChange];
      } else {
        aValue = a[sortConfig.key];
        bValue = b[sortConfig.key];
      }

      if (typeof aValue === "string" && !isNaN(aValue)) {
        aValue = parseFloat(aValue);
      }

      if (typeof bValue === "string" && !isNaN(bValue)) {
        bValue = parseFloat(bValue);
      }

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    setSortedCurrencies(sortedData);
  }, [currencies, sortConfig, timeChange]);

  const handleSort = (key) => {
    let direction = "desc";
    if (sortConfig.key === key) {
      direction = sortConfig.direction === "desc" ? "asc" : "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <main className={classes.listWrapper}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={classes.article}
      >
        Market Overview
      </motion.p>
      <div className={classes.listTokens}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={classes.coinDescribe}
        >
          <div className={classes.generalInfo}>
            <span
              className={classes.rankCoin}
              onClick={() => handleSort("rank")}
            >
              Rank
              {sortConfig.key === "rank" ? (
                sortConfig.direction === "desc" ? (
                  <TiArrowSortedDown />
                ) : (
                  <TiArrowSortedUp />
                )
              ) : (
                <TiArrowUnsorted />
              )}
            </span>
            <span
              className={classes.coinSymbol}
              onClick={() => handleSort("name")}
            >
              Name
              {sortConfig.key === "name" ? (
                sortConfig.direction === "desc" ? (
                  <TiArrowSortedDown />
                ) : (
                  <TiArrowSortedUp />
                )
              ) : (
                <TiArrowUnsorted />
              )}
            </span>
          </div>
          <span
            className={classes.coinPrice}
            onClick={() => handleSort("price")}
          >
            Price
            {sortConfig.key === "price" ? (
              sortConfig.direction === "desc" ? (
                <TiArrowSortedDown />
              ) : (
                <TiArrowSortedUp />
              )
            ) : (
              <TiArrowUnsorted />
            )}
          </span>
          <span className={classes.coinChange}>
            <SelectTimeRange
              selectedOption={timeChange}
              setSelectedOption={setTimeChange}
            />
            <span onClick={() => handleSort("change")}>
              Change
              {sortConfig.key === "change" ? (
                sortConfig.direction === "desc" ? (
                  <TiArrowSortedDown />
                ) : (
                  <TiArrowSortedUp />
                )
              ) : (
                <TiArrowUnsorted />
              )}
            </span>
          </span>
          <span
            className={classes.coinVolume}
            onClick={() => handleSort("volume")}
          >
            24h Volume
            {sortConfig.key === "volume" ? (
              sortConfig.direction === "desc" ? (
                <TiArrowSortedDown />
              ) : (
                <TiArrowSortedUp />
              )
            ) : (
              <TiArrowUnsorted />
            )}
          </span>
          <span
            className={classes.coinMarketCap}
            onClick={() => handleSort("marketCap")}
          >
            Market Cap
            {sortConfig.key === "marketCap" ? (
              sortConfig.direction === "desc" ? (
                <TiArrowSortedDown />
              ) : (
                <TiArrowSortedUp />
              )
            ) : (
              <TiArrowUnsorted />
            )}
          </span>
          <div className={classes.priceChangeMobile}>
            <span
              className={classes.priceMobile}
              onClick={() => handleSort("price")}
            >
              Price
              {sortConfig.key === "price" ? (
                sortConfig.direction === "desc" ? (
                  <TiArrowSortedDown />
                ) : (
                  <TiArrowSortedUp />
                )
              ) : (
                <TiArrowUnsorted />
              )}
            </span>
            <span className={classes.changeMobile}>
              <SelectTimeRange
                selectedOption={timeChange}
                setSelectedOption={setTimeChange}
              />
              Change
            </span>
          </div>
          <div className={classes.volCapMobile}>
            <span
              className={classes.volumeMobile}
              onClick={() => handleSort("volume")}
            >
              24h Volume
              {sortConfig.key === "volume" ? (
                sortConfig.direction === "desc" ? (
                  <TiArrowSortedDown />
                ) : (
                  <TiArrowSortedUp />
                )
              ) : (
                <TiArrowUnsorted />
              )}
            </span>
            <span className={classes.marketCapMobile}>Market Cap</span>
          </div>
        </motion.div>
        {loading
          ? Array.from({ length: 100 }).map((_, index) => (
              <SkeletonLoading
                key={index}
                style={{ width: "100%", height: "50px" }}
              />
            ))
          : sortedCurrencies.map((coin) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1, y: 0 }}
                key={coin.id}
              >
                <Link
                  to={`/cryptocurrency/${coin.id.toLowerCase()}`}
                  className={classes.coinBlock}
                >
                  <div className={classes.generalInfo}>
                    <span className={classes.rankCoin}>{coin.rank}</span>
                    <img
                      className={classes.coinImage}
                      src={coin.icon}
                      alt={""}
                      loading={"lazy"}
                    />
                    <div className={classes.nameWrapper}>
                      <span className={classes.coinSymbol}>{coin.symbol}</span>
                      <span className={classes.coinName}>{coin.name}</span>
                    </div>
                  </div>
                  <span className={classes.coinPrice}>
                    <FormatPrice price={coin.price} /> $
                  </span>
                  <span
                    className={`${classes.coinChange} ${coin[timeChange] > 0 ? classes.up : classes.down}`}
                  >
                    {coin.priceChange1h &&
                    coin.priceChange1d &&
                    coin.priceChange1w ? (
                      <>
                        {coin[timeChange] > 0
                          ? "+" + coin[timeChange]
                          : coin[timeChange]}
                      </>
                    ) : (
                      0
                    )}
                    %
                  </span>
                  <span className={classes.coinVolume}>
                    <NumberFormatter
                      number={coin.volume > 1 ? coin.volume.toFixed(0) : 0}
                    />{" "}
                    $
                  </span>
                  <span className={classes.coinMarketCap}>
                    <NumberFormatter
                      number={
                        coin.marketCap > 1 ? coin.marketCap.toFixed(0) : 0
                      }
                    />{" "}
                    $
                  </span>
                  <div className={classes.priceChangeMobile}>
                    <span className={classes.priceMobile}>
                      <FormatPrice price={coin.price} /> $
                    </span>
                    <span
                      className={`${classes.changeMobile} ${
                        coin[timeChange] > 0 ? classes.up : classes.down
                      }`}
                    >
                      {coin.priceChange1h &&
                      coin.priceChange1d &&
                      coin.priceChange1w ? (
                        <>
                          {coin[timeChange] > 0
                            ? "+" + coin[timeChange]
                            : coin[timeChange]}
                        </>
                      ) : (
                        0
                      )}
                      %
                    </span>
                  </div>
                  <div className={classes.volCapMobile}>
                    <span className={classes.volumeMobile}>
                      <NumberFormatter
                        number={coin.volume > 1 ? coin.volume.toFixed(0) : 0}
                      />{" "}
                      $
                    </span>
                    <span className={classes.marketCapMobile}>
                      <NumberFormatter
                        number={
                          coin.marketCap > 1 ? coin.marketCap.toFixed(0) : 0
                        }
                      />
                      $
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
      />
    </main>
  );
};

export default ListOfCurrencies;
