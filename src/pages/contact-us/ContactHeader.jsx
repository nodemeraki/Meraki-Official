import TelephoneImg from "../../assets/contact/contact-us.png";

const ContactHeader = () => {
  return (
    <section>
      <img src={TelephoneImg} alt="A pictire of a blue telephone with wire" />

      {/* Holds the three containers */}
      <div className="max-w-[1035px] w-full min-h-[244px] mx-auto grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 text-center">
        <div>
          <h3 className=" hidden md:block font-semibold text-[26px] leading-[31.47px]">
            Address
          </h3>
          <p className="font-normal text-[26px] leading-[31.47px]">
            Lagos, Nigeria
          </p>
        </div>

        <div>
          <h3 className="hidden md:block font-semibold text-[26px] leading-[31.47px]">
            Email
          </h3>
          <a
            href="mailto: info.merakinode@gmail.com"
            className="font-normal text-[26px] leading-[31.47px]"
          >
            info.merakinode@gmail.com
          </a>
        </div>

        <div>
          <h3 className="hidden md:block font-semibold text-[26px] leading-[31.47px]">
            Phone Number
          </h3>
          <p className="font-normal text-[26px] leading-[39px]">
            <span className="block">+2347057005399</span>
            <span className="block">+2348032433093</span>
          </p>
        </div>
      </div>

      {/* line */}
      <div className="border-[#044358] border max-w-[1166px] mx-auto mb-7"></div>
    </section>
  );
};

export default ContactHeader;
