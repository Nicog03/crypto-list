import { USDollar } from '../../utils/currencyUtils';
import GreenCaret from '../../assets/icons/up-green-caret.svg';
import RedCaret from '../../assets/icons/down-red-caret.svg';

interface PriceSectionInterface {
  symbol: string;
  price: number;
  dayValue: number;
}

export default function PriceSection({
  symbol,
  price,
  dayValue,
}: PriceSectionInterface) {
  return (
    <section>
      <h2 className="font-semibold text-xl text-gray-500">
        {symbol.toUpperCase()} Price
      </h2>
      <div className="flex items-center gap-2">
        <p className="text-5xl font-bold">{USDollar.format(price)}</p>
        <span className="flex items-center gap-1">
          <img src={+dayValue > 0 ? GreenCaret : RedCaret} alt="" />
          <p
            className={`text-xl font-semibold ${
              dayValue >= 0 ? `text-green-700` : `text-red-500`
            }`}
          >
            {dayValue.toFixed(1).replace('-', '')}%
          </p>
        </span>
      </div>
    </section>
  );
}
