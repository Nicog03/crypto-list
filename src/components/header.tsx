import BlockChainIcon from '../assets/icons/blockchain-icon.svg';
import MetamaskSection from './metamask-section';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const isScreenSm = useMediaQuery({
    query: '(min-width: 640px)',
  });

  return (
    <header
      className={`relative flex justify-between items-center p-2 bg-black/5 dark:bg-white/5 z-10`}
    >
      <div className={`flex items-center gap-3 `}>
        <img
          src={BlockChainIcon}
          alt="blockchain icon"
          className={`${isScreenSm ? 'h-14' : 'h-8'} dark:invert`}
        />
        <h1
          className={`${
            isScreenSm ? 'text-4xl' : 'text-2xl'
          } font-semibold  dark:text-white`}
        >
          Crypto List
        </h1>
      </div>
      <MetamaskSection />
    </header>
  );
}
