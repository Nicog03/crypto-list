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
  return (
    <button className="w-36 h-36 flex flex-col items-center gap-1 bg-gray-100 p-3 rounded-3xl hover:brightness-110">
      <img src={coinImageUrl} alt="bitcoin svg" className="h-14 w-14" />
      <div className="flex flex-col">
        <p className="font-semibold text-gray-700 text-lg">{coinName}</p>
        <p className="text font-semibold text-gray-800">{coinPrice}</p>
      </div>
    </button>
  );
}
