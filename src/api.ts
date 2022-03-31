const BASE_URL = `https://api.coinpaprika.com/v1`;

// Coins.js 전체 코인 목록 조회
export const fetchCoins = async () => {
  try {
    return await (await fetch(`${BASE_URL}/coins`)).json();
  } catch (err) {
    console.error(err);
  }
};

// Coin.js 코인 정보 조회
export const fetchCoinInfo = async (coinId: string) => {
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
};

// Coin.js 코인 시세 정보 조회
export const fetchCoinTickers = async (coinId: string) => {
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
};
