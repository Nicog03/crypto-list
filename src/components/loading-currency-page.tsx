import { useMediaQuery } from 'react-responsive';

export default function LoadingCurrencyPage() {
  const isScreenSm = useMediaQuery({
    query: '(min-width: 640px)',
  });

  return (
    <div className="flex flex-col gap-6">
      <div
        className="h-8 w-64 bg-gray-300 dark:bg-zinc-800 rounded-2xl relative
    before:absolute before:inset-0
before:-translate-x-full
before:animate-[shimmer_2s_infinite]
before:bg-gradient-to-r
before:from-transparent dark:before:via-zinc-600 before:via-white  before:to-transparent
overflow-hidden isolate"
      ></div>
      <div
        className="h-16 w-72 bg-gray-300 dark:bg-zinc-800 rounded-2xl relative
    before:absolute before:inset-0
before:-translate-x-full
before:animate-[shimmer_2s_infinite]
before:bg-gradient-to-r
before:from-transparent dark:before:via-zinc-600 before:via-white before:to-transparent
overflow-hidden isolate"
      ></div>
      <div
        className="flex flex-col gap-6 p-4 bg-gray-200 dark:bg-zinc-900  rounded-3xl relative
    before:absolute before:inset-0
before:-translate-x-full
before:animate-[shimmer_2s_infinite]
before:bg-gradient-to-r
before:from-transparent dark:before:via-zinc-600 before:via-white before:to-transparent
overflow-hidden isolate"
      >
        <div className="flex gap-6">
          <div className="bg-gray-300 dark:bg-zinc-800 h-72 w-full flex-grow rounded-2xl" />
          <div>
            {isScreenSm && (
              <div className="bg-gray-300 dark:bg-zinc-800 h-full w-72 rounded-2xl" />
            )}
          </div>
        </div>

        <div
          className={`${
            isScreenSm ? 'flex gap-6 items-center' : 'flex flex-col gap-6'
          }`}
        >
          <div className="flex-grow">
            <div
              className={` ${
                isScreenSm ? 'h-32' : 'h-16'
              } w-full  bg-gray-300 dark:bg-zinc-800 rounded-2xl`}
            />
          </div>
          <div className="flex-grow">
            <div
              className={` ${
                isScreenSm ? 'h-32' : 'h-16'
              } w-full  bg-gray-300 dark:bg-zinc-800 rounded-2xl`}
            />
          </div>
          {!isScreenSm && (
            <div className="bg-gray-300 dark:bg-zinc-800 w-full rounded-2xl h-48 " />
          )}
        </div>
      </div>
    </div>
  );
}
