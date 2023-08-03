import { nanoid } from "nanoid";
import { useContext } from "react";
import { ScreenContext } from "../../App";
import ButtonConsult from "./ButtonConsult";
import GiftItem from "./GiftItem";

const giftsDesktop = [
  {
    head: "ВИДЖЕТЫ",
    text: "30 готовых решений",
  },
  {
    head: "DASHBOARD",
    text: "с показателями вашего бизнеса",
  },
  {
    head: "SKYPE АУДИТ",
    text: "отдела продаж и CRM системы",
  },
  {
    head: "35 ДНЕЙ",
    text: "использования CRM",
  },
];

const giftsMobile = ["SKYPE АУДИТ", "30 ВИДЖЕТОВ", "DASHBOARD", "МЕСЯЦ AMOCRM"];

function MainScreen() {
  const isMobile = useContext(ScreenContext);

  return (
    <div className="text-[#E4E5EA] h-[451px] md:h-content w-full bg-transparent text-[18px] flex pl-6 md:pl-0 pr-14 md:pr-0 gap-4">
      <div className="w-full h-full flex md:flex-row flex-col justify-center  md:justify-between">
        <div className="md:w-[21rem] md:mt-16">
          <span className="text-[36px] md:text-[48px] font-normal leading-10">
            Зарабатывайте больше
          </span>
          <div
            className={`text-[36px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]`}
          >
            с WELBEX
          </div>
          <div className="md:text-[18px] font-normal pr-10 mt-6">
            Развиваем и контролируем продажи за вас
          </div>
        </div>
        <div className="md:w-[18rem] flex flex-col">
          {" "}
          <blockquote className="mt-8 md:mt-16 md:text-right ">
            Вместе с{" "}
            <span>
              <span className="md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
                {isMobile
                  ? "бесплатной консультацией "
                  : "БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ "}
              </span>
            </span>
            мы дарим:
          </blockquote>
          <div className="grid grid-rows-2 grid-cols-2 mt-4 md:mt-10 md:gap-4 ">
            {isMobile
              ? giftsMobile.map((item) => (
                  <GiftItem key={nanoid()} headline={item} />
                ))
              : giftsDesktop.map((item) => (
                  <GiftItem
                    key={nanoid()}
                    headline={item.head}
                    text={item.text}
                  />
                ))}
          </div>
          {isMobile ? "" : <ButtonConsult />}
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
