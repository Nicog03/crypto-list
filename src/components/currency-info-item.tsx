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
      <tr className="flex justify-between border-b py-3 text-sm">
        <th className="text-gray-500">{title}</th>
        <td>{value}</td>
      </tr>
    </>
  );
}
