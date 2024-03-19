export type CurrencyInfo = {
  id: string;
  symbol: string;
  name: string;
  market_data: MarketDataType;
};

export type MarketDataType = {
  market_cap: { usd: number };
  fully_diluted_valuation: { usd: number };
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_1y: number;
  high_24h: { usd: number };
  low_24h: { usd: number };
};
