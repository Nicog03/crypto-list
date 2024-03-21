export default function LoadingCoinCard() {
  return (
    <div
      className="flex gap-4 items-center w-full h-[90px] justify-between max-w-[500px] bg-gray-200 dark:bg-zinc-900 p-4 rounded-3xl backdrop-blur-sm relative
    before:absolute before:inset-0
before:-translate-x-full
before:animate-[shimmer_2s_infinite]
before:bg-gradient-to-r
before:from-transparent dark:before:via-zinc-600 before:via-white before:to-transparent
overflow-hidden isolate"
    >
      <div className="h-14 w-14 bg-gray-300 dark:bg-zinc-800 rounded-full flex-shrink-0" />
      <div className="flex justify-between items-center w-full flex-grow">
        <div className="bg-gray-300 dark:bg-zinc-800 h-10 w-28 rounded-xl" />
        <div className="bg-gray-300 dark:bg-zinc-800 h-6 w-20 rounded-xl" />
      </div>
      <div className="bg-gray-300 dark:bg-zinc-800 w-64 h-14 rounded-xl"></div>
    </div>
  );
}
