import CoinsList from '../components/molecules/coins-list';
import BackgroundImage from '../assets/images/background.jpg';

export default function HomePage() {
  return (
    <div className="w-full">
      <div
        className="fixed h-full left-0 top-0 right-0 bottom-0 -z-0 invert dark:invert-0 "
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPositionX: '50%',
        }}
      />
      <div className="flex p-2 justify-center">
        <CoinsList />
      </div>
    </div>
  );
}
