const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {Array(20)
        .fill("")
        .map((e, i) => (
          <div className="shimmer-card w-52 h-52 bg-gray-500 m-5" key={i}>
            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
              <img className="bg-gray-400 animate-pulse items-center text-center justify-center h-[60px] w-[160px] m-4" />
              <div className="p-1">
                <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500" />
                <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400" />
                <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400" />
                <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
