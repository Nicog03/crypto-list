import { USDollar } from '../utils/currencyUtils';

interface PriceRangeInterface {
  high: number;
  low: number;
  current: number;
}

export default function PriceRange({
  high,
  low,
  current,
}: PriceRangeInterface) {
  return (
    <div>
      <label className="font-semibold" htmlFor="price-range">
        Price Performance (24h)
      </label>
      <div className="flex justify-between text-sm font-semibold">
        <div>
          <p className="text-gray-500">Low</p>
          <p>{USDollar.format(low)}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-gray-500">High</p>
          <p>{USDollar.format(high)}</p>
        </div>
      </div>
      <input
        className="w-full "
        type="range"
        id="price-range"
        min={low}
        max={high}
        value={current}
        disabled
      />
    </div>
  );
}
