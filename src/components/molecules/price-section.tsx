import { USDollar } from '../../utils/currencyUtils';

interface PriceSectionInterface {
  symbol: string;
  price: number;
}

export default function PriceSection({ symbol, price }: PriceSectionInterface) {
  return (
    <section>
      <h2 className="font-semibold text-xl text-gray-500">
        {symbol.toUpperCase()} Price
      </h2>
      <p className="text-5xl font-bold">{USDollar.format(price)}</p>
    </section>
  );
}
