import BlockChainIcon from '../assets/icons/blockchain-icon.svg';
import { useParams } from 'react-router-dom';
import MetamaskSection from './metamask-section';

export default function Header({ invert = false }: { invert: boolean }) {
  const { currencyId } = useParams();

  currencyId ? (invert = false) : null;

  return (
    <header
      className={`relative flex justify-between items-center p-2 bg-black/5 ${
        invert ? 'bg-white/5' : ''
      }`}
    >
      <div className={`flex items-center gap-3 ${invert ? 'invert' : ''}`}>
        <img src={BlockChainIcon} alt="blockchain icon" />
        <h1 className="font-semibold text-4xl">Crypto List</h1>
      </div>
      <MetamaskSection invert={currencyId ? true : false} />
    </header>
  );
}
