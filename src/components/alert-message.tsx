interface AlertMessageInterface {
  setDisplayAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AlertMessage({
  setDisplayAlert,
}: AlertMessageInterface) {
  return (
    <div
      className="flex items-center w-fit dark:bg-white/5 bg-black/5 backdrop-blur-sm border border-red-400 text-sm px-4 py-3 rounded-2xl "
      role="alert"
    >
      <span className="text-zinc-300">
        Metamask extension not detected. Download it{' '}
        <a
          target="_blank"
          href="https://metamask.io/download"
          className="underline hover:text-white"
        >
          here
        </a>
        .
      </span>
      <button
        onClick={() => {
          setDisplayAlert(false);
        }}
      >
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </button>
    </div>
  );
}
