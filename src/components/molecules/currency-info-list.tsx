import CurrencyInfoItem from '../currency-info-item';
import { MarketDataType } from '../../shared/types/currency.type';
import { USDollar } from '../../utils/currencyUtils';

interface CurrencyInfoTableInterface {
  marketData: MarketDataType;
}

export default function CurrencyInfoTable({
  marketData,
}: CurrencyInfoTableInterface) {
  return (
    <table className="w-full flex flex-col h-full">
      <tbody className="h-full flex flex-col justify-between">
        <CurrencyInfoItem
          title="Market Cap"
          value={USDollar.format(marketData.market_cap.usd)}
        />
        <CurrencyInfoItem
          title="Fully Diluted Valuation"
          value={USDollar.format(marketData.fully_diluted_valuation.usd)}
        />
        <CurrencyInfoItem
          title="Circulating Supply"
          value={marketData.circulating_supply.toLocaleString()}
        />
        <CurrencyInfoItem
          title="Total Supply"
          value={marketData.total_supply.toLocaleString()}
        />
        <CurrencyInfoItem
          title="Max Supply"
          value={
            marketData.max_supply ? marketData.max_supply.toLocaleString() : '∞'
          }
        />
      </tbody>
    </table>
  );
}
