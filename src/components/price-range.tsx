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
      <label
        className="font-semibold text-black dark:text-white"
        htmlFor="price-range"
      >
        Price Performance (24h)
      </label>
      <div className="flex justify-between text-sm font-semibold">
        <div>
          <p className="text-gray-500 dark:text-gray-400">Low</p>
          <p className="text-black dark:text-white">{USDollar.format(low)}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-gray-500 dark:text-gray-400">High</p>
          <p className="text-black dark:text-white">{USDollar.format(high)}</p>
        </div>
      </div>
      <input
        className="relative appearance-none w-full bg-transparent
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:h-5
        [&::-webkit-slider-thumb]:w-2
        [&::-webkit-slider-thumb]:-mt-2
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-gray-400
        [&::-webkit-slider-thumb]:bottom-2
        [&::-moz-range-thumb]:h-5
        [&::-moz-range-thumb]:w-2
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:bg-gray-400
        [&::-moz-range-thumb]:border-none
        [&::-webkit-slider-runnable-track]:h-1                  
        [&::-webkit-slider-runnable-track]:bg-gray-500
        dark:[&::-webkit-slider-runnable-track]:bg-zinc-700                  
        [&::-webkit-slider-runnable-track]:rounded-full                  
        [&::-moz-range-track]:bg-gray-500         
        dark:[&::-moz-range-track]:bg-zinc-700   
        [&::-moz-range-track]:rounded-full
"
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
