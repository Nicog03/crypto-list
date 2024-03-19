import BlockChainIcon from '../assets/icons/blockchain-icon.svg';
import { useParams } from 'react-router-dom';

export default function Header({ invert = false }: { invert: boolean }) {
  const { currencyId } = useParams();

  currencyId ? (invert = false) : null;

  return (
    <header
      className={`flex justify-center p-2 bg-black/5 ${invert ? 'invert' : ''}`}
    >
      <div className="flex items-center gap-3">
        <img src={BlockChainIcon} alt="blockchain icon" />
        <h1 className="font-semibold text-4xl">Crypto List</h1>
      </div>
    </header>
  );
}
