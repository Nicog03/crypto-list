export async function getPopularCoins() {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&x_cg_demo_api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  const coins = await res.json();
  return coins;
}

export async function getSpecificCoinData(coinId: string) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}?x_cg_demo_api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  const coin = await res.json();
  return coin;
}

export async function getCoinHistoricalChartData({
  coinId,
  days,
}: {
  coinId: string;
  days: number;
}) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&x_cg_demo_api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  const chartData = await res.json();
  return chartData;
}
