
const Loader = ({ small = false }: { small?: boolean }) => {
  return (
    <div
      className={`flex items-center justify-center ${small ? "h-32 w-32" : "h-[100dvh] w-full"
        } bg-background`}
    >
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div
          className="w-20 h-20 border-4 border-transparent text-accent text-4xl animate-spin flex items-center justify-center border-t-accent rounded-full"
        >
          <div
            className="w-16 h-16 border-4 border-transparent text-primary text-2xl animate-spin flex items-center justify-center border-t-primary rounded-full"
          ></div>
        </div>
      </div>
    </div>

  );
};

export default Loader;
