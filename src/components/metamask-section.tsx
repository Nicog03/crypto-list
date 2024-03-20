import { useState } from 'react';
import closedEye from '../assets/icons/eye-closed.svg';
import openEye from '../assets/icons/eye-open.svg';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export default function MetamaskSection() {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletBalance, setWalletBalance] = useState('');
  const [displayBalance, setDisplayBalance] = useState(false);
  const [accounts, setAccounts] = useState(false);

  checkConnection();

  accounts && getAccount();

  async function checkConnection() {
    if (window.ethereum) {
      const connection: any = await window.ethereum.request({
        method: 'eth_accounts',
      });

      if (connection) if (connection.length > 0) setAccounts(true);
    }
  }

  async function getAccount() {
    if (window.ethereum) {
      const accounts: any = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      if (accounts) setWalletAddress(accounts[0]);
    }
  }

  async function requestAccount() {
    if (window.ethereum) {
      getAccount();
    } else {
      console.log('Metamask not detected');
    }
  }

  async function toggleBalanceDisplay() {
    if (window.ethereum) {
      const balance: any = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [walletAddress, 'latest'],
      });

      if (balance) setWalletBalance(balance[0]);
    }

    setDisplayBalance((prev) => !prev);
  }

  return (
    <div className="text-black dark:text-white h-fit self-center  flex flex-col items-end">
      {!walletAddress && (
        <button
          onClick={requestAccount}
          className=" border bg-white/5 border-white/10 px-2 rounded-xl hover:bg-orange-500/50 transition"
        >
          Connect Wallet
        </button>
      )}
      {walletAddress && (
        <div className="flex flex-col items-end text-sm">
          <p>Current Address:</p>
          <p className="text-xs">{walletAddress}</p>
        </div>
      )}
      {walletAddress && (
        <div>
          <div className="flex gap-2 text-sm">
            Balance:
            <div className="text-white flex gap-2 items-center bg-black/50 px-2 rounded-full">
              {displayBalance && `ETH ${walletBalance}`}
              <button onClick={toggleBalanceDisplay} className="h-5 w-5 invert">
                <img
                  src={displayBalance ? closedEye : openEye}
                  alt="password display toggle"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
