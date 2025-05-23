import trust from "/src/assets/home-img/trustHomePage.png";

function Trust() {
  return (
    <section className="w-full px-5 md:px-18 pt-6 md:pt-20 bg-body flex flex-row flex-wrap lg:flex-nowrap gap-[30px] justify-center content-stretch md:pb-20 items-center">
      {/* image div */}
      <div className="hidden sm:block h-[70vh] md:w-[45vw] rounded-md grow">
        <img
          src={trust}
          alt="trustHomePage"
          className="h-full w-full object-cover"
        />
      </div>
      {/* second trust section div */}
      <div className="grow md:pb-0 pb-[20px]">
        <h2 className="font-header text-[34px] md:text-3xl font-[600] uppercase tracking-wider px-3  md:px-0">
          tech company you can {""}
          <span className="md:block text-[red]">trust</span>
        </h2>

        <div>
          <p className="font-body text-sm md:text-xl leading-8 mt-8 lg:w-120 w-full px-3  md:px-0">
            Merakinode is a media agency brand that focuses on the growth of
            people by connecting them with ideas and information to build the
            most successful businesses and brands
          </p>
        </div>

        <div>
          <p className="font-body text-center md:text-start text-xl mt-14">
            Trust by
          </p>
        </div>

        {/* trusted bt area */}
        <div className="flex gap-5 mt-4 md:mt-7">
          <div className="w-20 h-14 bg-white rounded-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)]"></div>
          <div className="w-20 h-14 bg-white rounded-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)]"></div>
          <div className="w-20 h-14 bg-white rounded-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)]"></div>
          <div className="w-20 h-14 bg-white rounded-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)]"></div>
          <div className="w-20 h-14 bg-white rounded-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)]"></div>
        </div>
      </div>
    </section>
  );
}

export default Trust;
