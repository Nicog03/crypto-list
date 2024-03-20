import TableDataCell from '../table-data';
import { MarketDataType } from '../../shared/types/currency.type';

interface PriceChangeTableInterface {
  marketData: MarketDataType;
}

export default function PriceChangeTable({
  marketData,
}: PriceChangeTableInterface) {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-slate-100 text-black dark:bg-zinc-700 dark:text-white">
          <th>24h</th>
          <th>7d</th>
          <th>14d</th>
          <th>30d</th>
          <th>60d</th>
          <th>1y</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableDataCell
            value={marketData.price_change_percentage_24h.toFixed(1)}
          />
          <TableDataCell
            value={marketData.price_change_percentage_7d.toFixed(1)}
          />
          <TableDataCell
            value={marketData.price_change_percentage_14d.toFixed(1)}
          />
          <TableDataCell
            value={marketData.price_change_percentage_30d.toFixed(1)}
          />
          <TableDataCell
            value={marketData.price_change_percentage_60d.toFixed(1)}
          />
          <TableDataCell
            value={marketData.price_change_percentage_1y.toFixed(1)}
          />
        </tr>
      </tbody>
    </table>
  );
}
