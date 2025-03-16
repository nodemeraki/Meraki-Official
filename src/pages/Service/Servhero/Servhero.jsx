import HeroIm from "/src/assets/service-img/caroze 1.png";

function Servhero() {
  return (
    <section className="bg-body">
      <div
        className="min-h-[80vh] w-[90%] mx-auto rounded-sm bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroIm})` }}
      >
        <h2
          className="tracking-wider text-3xl font-homeHero text-white capitalize mb-10 ml-8"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.38)" }}
        >
          we offer
          <span className="text-[#F96662] capitalize"> professional</span>
          services
        </h2>
      </div>
    </section>
  );
}

export default Servhero;
