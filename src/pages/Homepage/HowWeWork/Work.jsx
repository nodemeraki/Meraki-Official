import work from "/src/assets/home-img/work.png";

function Work() {
  return (
    <section className="md:h-[90vh] w-full flex flex-col border-b border-[#000000] bg-body">
      <div>
        <h3 className="text-center text-4xl my-10 font-header font-bold">
          How we <span className="text-[red]">work</span>
        </h3>
      </div>
      <div className="min-h-[30vh] md:h-[60vh] w-full rounded-2xl overflow-hidden">
        <img src={work} alt="work" className="h-full w-full object-contain" />
      </div>
    </section>
  );
}

export default Work;
