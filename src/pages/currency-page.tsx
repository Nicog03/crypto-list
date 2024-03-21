import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSpecificCoinData } from '../../api/requests';
import CurrencyHeader from '../components/currency-header';
import PriceSection from '../components/molecules/price-section';
import CurrencyInfoTable from '../components/molecules/currency-info-list';
import PriceChangeTable from '../components/molecules/price-change-table';
import PriceGraph from '../components/molecules/price-graph';
import PriceRange from '../components/price-range';
import { useMediaQuery } from 'react-responsive';
import BackgroundImage from '../assets/images/background.jpg';

export default function CurrencyPage() {
  const { currencyId } = useParams();

  const isScreenSm = useMediaQuery({
    query: '(min-width: 640px)',
  });

  const { data } = useQuery({
    queryKey: [`${currencyId}-data`],
    queryFn: () => getSpecificCoinData(currencyId!),
  });

  return (
    <div className="p-2 my-auto w-full">
      <div
        className="fixed h-full left-0 top-0 right-0 bottom-0 -z-50 invert dark:invert-0"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPositionX: '50%',
        }}
      />
      {data && (
        <div className="flex flex-col gap-4 z-10">
          <CurrencyHeader
            name={data.name}
            image={data.image.small}
            marketCapRank={data.market_cap_rank}
          />
          <PriceSection
            price={data.market_data.current_price.usd}
            symbol={data.symbol}
            dayValue={data.market_data.price_change_percentage_24h}
          />
          <div className="p-4 bg-white/0 rounded-3xl ring-1 ring-black/0 backdrop-blur-lg border-[1px] border-black/5 dark:border-white/5 shadow-inner shadow-gray-500/5">
            <div className="flex gap-2">
              <PriceGraph currencyName={data.name} />
              <div>
                {isScreenSm && (
                  <CurrencyInfoTable marketData={data.market_data} />
                )}
              </div>
            </div>
            <div className={`${isScreenSm ? 'flex gap-4 items-center' : ''}`}>
              <div className="flex-grow">
                <PriceRange
                  high={data.market_data.high_24h.usd}
                  low={data.market_data.low_24h.usd}
                  current={data.market_data.current_price.usd}
                />
              </div>
              <div className="flex-grow">
                <PriceChangeTable marketData={data.market_data} />
              </div>
            </div>
            {!isScreenSm && <CurrencyInfoTable marketData={data.market_data} />}
          </div>
        </div>
      )}
    </div>
  );
}
