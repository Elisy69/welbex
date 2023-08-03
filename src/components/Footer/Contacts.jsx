import TelegramIcon from "/src/components/Icons/TelegramIcon.jsx";
import ViberIcon from "/src/components/Icons/ViberIcon.jsx";
import WhatsappIcon from "/src/components/Icons/WhatsappIcon.jsx";

function Contacts({ isForNavbar }) {
  return (
    <div
      className={`${
        isForNavbar
          ? `flex-row gap-[2vw] ml-auto items-center`
          : `flex-col gap-6`
      } flex gap-2 md:items-end`}
    >
      <span
        className={`${
          isForNavbar ? `hidden xl:block xl:font-medium xl:text-[16px]` : ``
        }text-[1rem] `}
      >
        +7 555 555-55-55
      </span>
      <div
        className={`${
          isForNavbar
            ? `hidden lg:flex lg:gap-6 lg:mr-4 gap-2 mr-1`
            : `flex gap-2`
        }`}
      >
        <TelegramIcon />
        <ViberIcon />
        <WhatsappIcon />
      </div>
      {isForNavbar ? (
        ""
      ) : (
        <span className="mb-10">Москва, Путевой проезд 3с1, к 902</span>
      )}
    </div>
  );
}

export default Contacts;
