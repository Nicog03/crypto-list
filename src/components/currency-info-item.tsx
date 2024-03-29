interface CurrencyInfoItemInterface {
  title: string;
  value: string | number;
}

export default function CurrencyInfoItem({
  title,
  value,
}: CurrencyInfoItemInterface) {
  return (
    <>
      <tr className="flex items-center gap-10 justify-between border-b dark:border-b-zinc-800 py-3 text-sm">
        <th className="text-gray-500 dark:text-gray-300 text-left ">{title}</th>
        <td className="text-black dark:text-white ">{value}</td>
      </tr>
    </>
  );
}
