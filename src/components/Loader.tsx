const Loader = () => {
  return (
    <section className="loader flex flex-col justify-center items-center text-3xl grow min-h-[62vh]">
      <div className="loader-spinner my-7">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span className="loader-text my-7">Chargement</span>
    </section>
  );
};

export default Loader;
