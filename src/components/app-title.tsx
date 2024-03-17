import BlockChainIcon from '../assets/icons/blockchain-icon.svg';

export default function AppTitle() {
  return (
    <div className="flex items-center gap-3 self-center">
      <img src={BlockChainIcon} alt="blockchain icon" className="invert" />
      <h1 className="text-white font-semibold text-4xl">Crypto List</h1>
    </div>
  );
}
