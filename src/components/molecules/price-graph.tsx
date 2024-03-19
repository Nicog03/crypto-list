import {
  LineChart,
  Line,
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
    days: 7,
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
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-gray-500">
            {currencyName} Price Chart ({fetchProps.days}d)
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={coinChartData} margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray={2} />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#009D5B"
                dot={false}
                strokeWidth={2}
              />
              <Line type="monotone" stroke="#000" dot={false} strokeWidth={2} />
              <YAxis
                interval={'preserveStartEnd'}
                domain={[
                  'dataMin - (dataMin*0.75)',
                  'dataMax + (dataMax*0.75)',
                ]}
                padding={{ top: 10, bottom: 5 }}
              />
              <XAxis dataKey="date" hide={true} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
