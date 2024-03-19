import { useNavigate } from 'react-router-dom';
import CompactChart from './molecules/compact-chart';

interface CoinCardInterface {
  coinName: string;
  coinImageUrl: string;
  coinPrice: number;
  coinId: string;
  sparkline_in_7d: { price: number[] };
}

export default function CoinCard({
  coinName,
  coinImageUrl,
  coinPrice,
  coinId,
  sparkline_in_7d,
}: CoinCardInterface) {
  const navigate = useNavigate();

  function changePageHandler() {
    const currencyId = coinId.toLocaleLowerCase().replace(/ /g, '-');

    navigate(`${currencyId}`);
  }

  return (
    <button
      onClick={changePageHandler}
      className="w-full h-fit flex justify-between max-w-[500px] items-center bg-white/0 p-4 rounded-3xl hover:brightness-110 transition ring-1 ring-black/0 backdrop-blur-sm hover:backdrop-blur-md border-[1px] border-white/5 shadow-inner shadow-gray-500/5"
    >
      <div className="flex gap-4">
        <img
          src={coinImageUrl}
          alt="bitcoin svg"
          className="h-14 w-14 self-center"
        />
        <div className="flex flex-col items-start">
          <p className="font-semibold text-gray-300 text-lg text-left">
            {coinName}
          </p>
          <p className="text font-semibold text-gray-200 text-left">
            USD {coinPrice}
          </p>
        </div>
      </div>
      <CompactChart chartData={sparkline_in_7d.price} />
    </button>
  );
}
