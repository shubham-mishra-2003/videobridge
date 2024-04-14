const Loader = () => {
  return (
    <div className="w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="loader">
        <div className="loader_cube loader_cube--color" />
        <div className="loader_cube loader_cube--glowing" />
        <p className="text-xl font-extrabold text-sky-500 mt-20">Processing...</p>
      </div>
    </div>
  );
};

export default Loader;
