import { ResponsiveContainer, LineChart, Line, YAxis } from 'recharts';

interface CompactChartInterface {
  chartData: number[];
}

export default function CompactChart({ chartData }: CompactChartInterface) {
  const data = chartData.map(function (value) {
    return {
      price: value,
    };
  });

  return (
    <ResponsiveContainer width="50%" minWidth={50} height={50}>
      <LineChart data={data} margin={{ left: 20 }}>
        <Line
          type="monotone"
          dataKey="price"
          stroke={
            chartData[0] >= chartData[chartData.length - 1]
              ? '#FF3A33'
              : '#009D5B'
          }
          dot={false}
          strokeWidth={2}
        />
        <YAxis domain={['dataMin - (100)', 'dataMax + (100)']} hide={true} />
      </LineChart>
    </ResponsiveContainer>
  );
}
