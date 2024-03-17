import { useNavigate } from 'react-router-dom';

interface CoinCardInterface {
  coinName: string;
  coinImageUrl: string;
  coinPrice: number;
}

export default function CoinCard({
  coinName,
  coinImageUrl,
  coinPrice,
}: CoinCardInterface) {
  const navigate = useNavigate();

  function changePageHandler() {
    const currencyName = coinName.toLocaleLowerCase().replace(/ /g, '-');

    navigate(`${currencyName}`);
  }

  return (
    <button
      onClick={changePageHandler}
      className="w-full h-fit flex items-center gap-4 bg-white/0 p-4 rounded-3xl hover:brightness-110 transition ring-1 ring-black/0 backdrop-blur-md border-[1px] border-white/5 shadow-inner shadow-gray-500/5"
    >
      <img src={coinImageUrl} alt="bitcoin svg" className="h-14 w-14" />
      <div className="flex flex-col items-start">
        <p className="font-semibold text-gray-300 text-lg">{coinName}</p>
        <p className="text font-semibold text-gray-200">USD {coinPrice}</p>
      </div>
    </button>
  );
}
