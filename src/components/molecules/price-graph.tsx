import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { useQuery } from '@tanstack/react-query';
import { getCoinHistoricalChartData } from '../../../api/requests';
import { useParams } from 'react-router-dom';
import moment from 'moment';

interface PriceGraphInterface {
  currencyName: string;
}

export default function PriceGraph({ currencyName }: PriceGraphInterface) {
  const { currencyId } = useParams();

  const fetchProps = {
    coinId: currencyId!,
    days: 1,
  };

  const { data } = useQuery({
    queryKey: ['chart-history-data'],
    queryFn: () => getCoinHistoricalChartData(fetchProps),
  });

  let coinChartData;

  if (data) {
    coinChartData = data.prices.map((value: [number, number]) => ({
      date: moment(value[0]).format('MMM DD hh:mm a'),
      price: value[1].toFixed(2),
    }));
  }

  return (
    <>
      {coinChartData && (
        <div className="flex flex-col gap-2 flex-grow w-full ">
          <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
            {currencyName} Price Chart (24h)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={coinChartData}>
              <CartesianGrid vertical={false} />
              <defs>
                <linearGradient id="priceColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="20%" stopColor="#009D5B" stopOpacity={1} />
                  <stop offset="95%" stopColor="#009D5B" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area
                type={'monotone'}
                dataKey={'price'}
                fill="url(#priceColor)"
                stroke="#009D5B"
                strokeWidth={2}
              />
              <YAxis
                width={40}
                orientation="right"
                interval={'preserveStartEnd'}
                domain={[
                  'dataMin - (dataMin*0.75)',
                  'dataMax + (dataMax*0.75)',
                ]}
                padding={{ top: 10, bottom: 5 }}
                tickFormatter={(value) =>
                  new Intl.NumberFormat('en-US', {
                    notation: 'compact',
                    compactDisplay: 'short',
                  }).format(value)
                }
              />
              <XAxis dataKey="date" hide={true} />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
