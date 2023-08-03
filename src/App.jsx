import { nanoid } from "nanoid";
import { createContext, useEffect, useState } from "react";
import Circle from "./components/Circle/Circle";
import Footer from "./components/Footer/Footer";
import MainScreen from "./components/MainScreen/MainScreen";
import NavBar from "./components/Navbar/Navbar";
import { circles } from "./constants/circles";

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
      }  w-full h-full bg-black relative overflow-hidden`}
    >
      <ScreenContext.Provider value={isMobile}>
        <NavBar />
        <MainScreen />
        <Footer />
        {circles.map((item) => (
          <Circle key={nanoid()} circleNum={item} />
        ))}
      </ScreenContext.Provider>
    </div>
  );
}

export default App;
