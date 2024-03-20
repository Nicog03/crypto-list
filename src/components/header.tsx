import BlockChainIcon from '../assets/icons/blockchain-icon.svg';
import MetamaskSection from './metamask-section';

export default function Header() {
  return (
    <header
      className={`relative flex justify-between items-center p-2 bg-black/5 dark:bg-white/5 z-10`}
    >
      <div className={`flex items-center gap-3 `}>
        <img
          src={BlockChainIcon}
          alt="blockchain icon"
          className="dark:invert"
        />
        <h1 className="font-semibold text-4xl dark:text-white">Crypto List</h1>
      </div>
      <MetamaskSection />
    </header>
  );
}
