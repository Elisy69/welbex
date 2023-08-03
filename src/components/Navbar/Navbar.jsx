import { nanoid } from "nanoid";
import { useContext } from "react";
import { ScreenContext } from "../../App";
import Contacts from "../Footer/Contacts";
import ButtonNavbar from "./ButtonNavbar";
import WelbexLogo from "/src/components/Icons/WelbexLogo.jsx";
const menuItemsMobile = ["УСЛУГИ", "ВИДЖЕТЫ", "ИНТЕГРАЦИИ", "КЕЙСЫ"];
const menuItemsDesktop = [
  "Услуги",
  "Виджеты",
  "Интеграции",
  "Кейсы",
  "Сертификаты",
];

function NavBar() {
  const isMobile = useContext(ScreenContext);

  return (
    <nav
      className={`${
        isMobile
          ? `text-[0.8rem] gap-3 place-content-center px-2 h-[3rem] bg-black`
          : `bg-transparent h-[16vh] items-center`
      } w-full  text-white font-light flex relative z-10`}
    >
      {isMobile ? (
        ""
      ) : (
        <div className="text-[10px] font-light flex flex-col">
          <WelbexLogo />
          <span className="self-center mt-2">крупный интегратор CRM</span>
          <span className="self-center">в Росcии и ещё 8 странах</span>
        </div>
      )}
      <div className="flex place-content-between gap-[2vw] md:ml-[3vw] md:font-medium md:text-[16px]">
        {isMobile
          ? menuItemsMobile.map((item) => (
              <ButtonNavbar key={nanoid()} text={item} />
            ))
          : menuItemsDesktop.map((item) => (
              <ButtonNavbar key={nanoid()} text={item} />
            ))}
      </div>
      {isMobile ? "" : <Contacts isForNavbar={true} />}
    </nav>
  );
}

export default NavBar;
