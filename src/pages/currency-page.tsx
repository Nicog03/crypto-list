import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSpecificCoinData } from '../../api/requests';

export default function CurrencyPage() {
  const { currencyId } = useParams();

  const { data } = useQuery({
    queryKey: [`${currencyId}-data`],
    queryFn: () => getSpecificCoinData(currencyId!),
  });

  console.log(data);

  return <h1>Currency Page</h1>;
}
