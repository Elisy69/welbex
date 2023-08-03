import { createContext, useEffect, useState } from "react";
import Circle from "./components/Circle/Circle";
import Footer from "./components/Footer/Footer";
import MainScreen from "./components/MainScreen/MainScreen";
import NavBar from "./components/Navbar/Navbar";

export const ScreenContext = createContext(null);
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  });

  return (
    <div
      className={`${
        isMobile ? `` : `px-[8vw]`
      } relative w-full h-full bg-black`}
    >
      <ScreenContext.Provider value={isMobile}>
        <NavBar />
        <MainScreen />
        <Footer />
        <Circle circleNum={"circle_1"} />
        <Circle circleNum={"circle_2"} />
        <Circle circleNum={"circle_3"} />
        <Circle circleNum={"circle_4"} />
        <Circle circleNum={"circle_5"} />
      </ScreenContext.Provider>
    </div>
  );
}

export default App;
