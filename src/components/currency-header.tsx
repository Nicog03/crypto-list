import { Link } from 'react-router-dom';
import leftCaret from '../assets/icons/left-caret.svg';

interface CurrencyHeaderInterface {
  name: string;
  image: string;
  marketCapRank: number;
}

export default function CurrencyHeader({
  name,
  image,
  marketCapRank,
}: CurrencyHeaderInterface) {
  return (
    <div className="flex items-center gap-4">
      <Link
        to={'/'}
        className=" bg-gray-300 dark:bg-zinc-800 rounded-lg p-1 hover:brightness-75 transition"
      >
        <img
          src={leftCaret}
          alt="left facing caret"
          className="h-8 w-8 opacity-50 dark:invert"
        />
      </Link>
      <img src={image} alt="currency image" />
      <h1 className="text-3xl font-semibold text-black dark:text-white">
        {name}
      </h1>
      <p className="text-sm text-gray-700 dark:text-gray-300 bg-gray-300 dark:bg-zinc-800 font-bold p-1 rounded-lg px-2  text-center">
        #{marketCapRank}
      </p>
    </div>
  );
}
