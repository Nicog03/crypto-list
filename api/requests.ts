export async function getPopularCoins() {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&x_cg_demo_api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  const coins = await res.json();
  return coins;
}
