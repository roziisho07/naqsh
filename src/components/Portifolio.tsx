import Menu from "./Menu";

function Portifolio() {
  return (
    <main className=" w-[100vw] md:w-full bg-white py-6 mt-6 font-sans flex items-center justify-center flex-col mb-20">
      <h1 className="text-3xl ">Portifolio</h1>
      <section className="flex items-center justify-center w-full pt-6">
        <Menu />
      </section>
    </main>
  );
}



export default Portifolio;
