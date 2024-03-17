import CoinsList from '../components/molecules/coins-list';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-6xl self-center font-semibold">Crypto List</h1>
      <CoinsList />
    </div>
  );
}
