import Linkedin from "/src/assets/about-img/aboutlink.png";
import Twitter from "/src/assets/about-img/abouttwit.png";
import Facebook from "/src/assets/about-img/aboutfaceb.png";
import Member0 from "/src/assets/about-img/Member1.png";
import Member1 from "/src/assets/about-img/Member2.png";
import Member2 from "/src/assets/about-img/Member3.png";
import Member3 from "/src/assets/about-img/Member4.png";
import Member4 from "/src/assets/about-img/Member5.png";
import Member5 from "/src/assets/about-img/Member5.png";

const teamMembers = [
  {
    id: 1,
    name: "SUNDAY TOGGS",
    profession: "Web Developer",
    image: Member0,
  },
  {
    id: 2,
    name: "MICHEAL ADEBOLA",
    profession: "Manager",
    image: Member1,
  },
  {
    id: 3,
    name: "GRACE LOVEDAY",
    profession: "Marketer",
    image: Member2,
  },
  {
    id: 4,
    name: "BRIGGS BROWN",
    profession: "Content Writer",
    image: Member3,
  },
  {
    id: 5,
    name: "EBRUWIYO SAMUEL",
    profession: "C.E.O",
    image: Member4,
  },
  {
    id: 6,
    name: "SAMMY WHITE", // placeholder
    profession: "Fullstack",
    image: Member5,
  },
];

function TeamSection() {
  return (
    <section className="py-12 bg-body px-6 md:px-16">
      <h2 className="text-center text-3xl font-lora font-semibold text-gray-800">
        Meet our Team
      </h2>
      <p className="text-center text-gray-600 w-[50vw] m-auto mt-2">
        We have much planned for the future, working with great minds and
        organizations to create a better, smarter, and most effective business
        solution that works.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-[#1A4E89] text-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center w-60 mx-auto"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-42 object-cover border-4 border-gray-300"
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-300 text-sm mt-2">{member.profession}</p>
            <div className="flex gap-3 mt-4">
              <img
                src={Linkedin}
                alt="LinkedIn"
                className="w-3 h-3 cursor-pointer hover:opacity-80"
              />
              <img
                src={Twitter}
                alt="Twitter"
                className="w-3 h-3 cursor-pointer hover:opacity-80"
              />
              <img
                src={Facebook}
                alt="Facebook"
                className="w-2 h-3 cursor-pointer hover:opacity-80"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
