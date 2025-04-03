const Circle = "/assets/about-img/circle.png";
// const Circle = new URL("../../assets/about-img/circle.png", import.meta.url)
//   .href;

const principles = [
  {
    number: "1",
    title: "We question everything.",
    description:
      "At SAMMEDIA, we are a well-known brand that boosts a company's worth by offering it a competitive advantage in the marketplace and the development of strategic.",
  },
  {
    number: "2",
    title: "We never settle for good enough.",
    description:
      "At SAMMEDIA, we are a well-known brand that boosts a company's worth by offering it a competitive advantage in the marketplace and the development of strategic.",
  },
  {
    number: "3",
    title: "We prioritise empathy over ego.",
    description:
      "At SAMMEDIA, we are a well-known brand that boosts a company's worth by offering it a competitive advantage in the marketplace and the development of strategic.",
  },
  {
    number: "4",
    title: "We invest ourselves in each project.",
    description:
      "At SAMMEDIA, we are a well-known brand that boosts a company's worth by offering it a competitive advantage in the marketplace and the development of strategic.",
  },
  {
    number: "5",
    title: "We love to add value to others.",
    description:
      "At SAMMEDIA, we are a well-known brand that boosts a company's worth by offering it a competitive advantage in the marketplace and the development of strategic.",
  },
  {
    image: Circle,
  },
];

function PrinciplesSection() {
  return (
    <section className="bg-body pb-12">
      {/* Title */}
      <h2 className="text-center text-2xl font-[500] font-lora text-black mb-8">
        The Principle that guides <span className="text-red-500">Us</span>
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16"> */}
        {principles.map((principle, index) =>
          principle.image ? (
            <div key={index} className="flex justify-center items-center">
              <img
                src={principle.image}
                alt="Principle Representation"
                className="w-48 h-48 object-cover rounded-full border border-gray-300"
              />
            </div>
          ) : (
            <div
              key={index}
              className="bg-primary text-white pt-6 pb-24 px-6 rounded-sm max-w-sm mx-auto"
            >
              {/* Numbered Icon */}
              <div className="flex items-center mb-4">
                <span className="bg-white text-primary font-bold text-lg rounded-full w-7 h-7 flex items-center justify-center mr-3">
                  {principle.number}
                </span>
                <h3 className="text-sm font-bold">{principle.title}</h3>
              </div>

              {/* Line */}
              <hr className="border-t border-white mb-4" />

              {/* Description */}
              <p className="text-sm">{principle.description}</p>
            </div>
          )
        )}
      </div>

      {/* Bottom Horizontal Line */}
      <div className="border-t border-gray-300 mt-12"></div>
    </section>
  );
}

export default PrinciplesSection;
