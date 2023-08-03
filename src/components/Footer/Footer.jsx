import { nanoid } from "nanoid";
import { useContext } from "react";
import { ScreenContext } from "../../App";
import ButtonNavbar from "./ButtonNavbar";
import Contacts from "./Contacts";

const about = ["Партнерская программа", "Вакансии"];
const menu = [
  "Расчет стоимости",
  "Услуги",
  "Виджеты",
  "Интеграция",
  "Наши клиенты",
  "Благодарсность клиентов",
  "Кейсы",
  "Сертификаты",
  "Блог на YouTube",
  "Вопрос/Ответ",
];

function Footer() {
  const isMobile = useContext(ScreenContext);

  return (
    <footer className="pl-4  flex flex-col text-white bg-black text-[14px] md:mt-14">
      <div className=" md:pl-0 pt-4 h-content flex flex-col md:flex-row md:gap-16">
        <section className="flex flex-col gap-2 py-2">
          <h1 className="text-[#656566] font-bold text-[12px] pb-1">
            О КОМПАНИИ
          </h1>
          {about.map((item, index) => {
            if (index > 1) return;
            return <ButtonNavbar key={nanoid()} text={item} />;
          })}
        </section>
        <section className="flex flex-col gap-2 py-2">
          <h1 className="text-[#656566] font-bold text-[12px] pb-1 ">МЕНЮ</h1>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              {menu.map((item, index) => {
                if (index > 4) return;
                return <ButtonNavbar key={nanoid()} text={item} />;
              })}
            </div>
            <div className="flex flex-col gap-2">
              {menu.map((item, index) => {
                if (index < 5) return;
                return <ButtonNavbar key={nanoid()} text={item} />;
              })}
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2 py-2 md:ml-auto md:items-end">
          <h1 className="text-[#656566] font-bold text-[12px] pb-1">
            КОНТАКТЫ
          </h1>
          <Contacts />
        </section>
      </div>

      <div
        className={`${
          isMobile ? `` : `self-end text-right mt-10`
        } flex flex-col `}
      >
        <span className="text-[12px] ">©WELBEX 2022. Все права защищены.</span>
        <span className="text-[12px] md:mb-4 mb-12 underline underline-offset-1">
          Политика конфиденциальности
        </span>
      </div>
    </footer>
  );
}

export default Footer;
