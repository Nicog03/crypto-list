import CoinsList from '../components/molecules/coins-list';
import AppTitle from '../components/app-title';
import BackgroundImage from '../assets/images/background.png';

export default function HomePage() {
  return (
    <div
      className="flex flex-col gap-3 p-2 items-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPositionX: '50%',
      }}
    >
      <AppTitle />
      <CoinsList />
    </div>
  );
}
