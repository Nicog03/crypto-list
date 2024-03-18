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
    <table className="w-full">
      <tbody>
        <CurrencyInfoItem
          title="Market Cap"
          value={USDollar.format(marketData.market_cap.usd)}
        />
        <CurrencyInfoItem
          title="Fully Diluted Valuation"
          value={USDollar.format(marketData.fully_diluted_valuation.usd)}
        />
        <CurrencyInfoItem title="24 Hour Trading Vol" value={'no value yet'} />
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
