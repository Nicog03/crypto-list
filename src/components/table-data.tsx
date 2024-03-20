import GreenCaret from '../assets/icons/up-green-caret.svg';
import RedCaret from '../assets/icons/down-red-caret.svg';

interface TableDataCellInterface {
  value: string | number;
}

export default function TableDataCell({ value }: TableDataCellInterface) {
  return (
    <td
      className={`dark:bg-white/5 bg-black/5 text-center [&:not(:first-child)]:border-l  dark:border-zinc-700 py-2  ${
        +value > 0 ? `text-green-700` : `text-red-500`
      }`}
    >
      <div className="flex items-center gap-1">
        <span className="flex items-center gap-1 mx-auto">
          <img src={+value > 0 ? GreenCaret : RedCaret} alt="" />
          {value}%
        </span>
      </div>
    </td>
  );
}
