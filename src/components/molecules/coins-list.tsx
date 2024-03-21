import CoinCard from '../coin-card';
import { useQuery } from '@tanstack/react-query';
import { getPopularCoins } from '../../../api/requests';
import LoadingCoinsList from './loading-coins-list';

type Coin = {
  name: string;
  image: string;
  current_price: number;
  id: string;
  symbol: string;
  sparkline_in_7d: { price: number[] };
};

export default function CoinsList() {
  const { data, isFetching } = useQuery({
    queryKey: ['popular-coins'],
    queryFn: getPopularCoins,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="grid gap-2">
      {isFetching ? (
        <LoadingCoinsList />
      ) : (
        data &&
        data.map((coin: Coin) => {
          return (
            <CoinCard
              coinImageUrl={coin.image}
              coinName={coin.name}
              coinSymbol={coin.symbol}
              coinPrice={coin.current_price}
              coinId={coin.id}
              key={coin.id}
              sparkline_in_7d={coin.sparkline_in_7d}
            />
          );
        })
      )}
    </div>
  );
}
