import Atropos from "atropos/react";
import "atropos/css";
import { useState, useRef, createContext } from "react";
import { Cassette, HolographicStickert } from "./component/Cassette";

export const AppContext = createContext();

export default function App() {
  const [isCassetteVisible, setCassetteVisible] = useState(false);
  const toggleCassetteVisible = () => {
    toggleAudioPlayPause();
    setCassetteVisible(!isCassetteVisible);
  };

  const audioRef = useRef(null);

  const toggleAudioPlayPause = () => {
    if (audioRef.current) {
      if (!isCassetteVisible) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <>
      <div id="app" className="app relative w-full max-w-sm">
        <Atropos
          onClick={toggleCassetteVisible}
          highlight={true}
          className="relative cursor-pointer"
          shadow={false}
          activeOffset={10}
          shadowScale={1}
          rotateXMax={45}
          rotateYMax={45}
          innerClassName="overflow-visible after:bg-[#f2be4a] after:absolute after:w-full after:h-full after:block after:top-0"
          shadowOffset={50}
        >
          {/* <audio
            ref={audioRef}
            src="assets/songs/Idol-YOASOBI.mp3"
            loop
            preload="auto"
          ></audio> */}
          <div className="container-content absolute grid h-full w-full place-items-center">
            <AppContext.Provider
              value={{ isCassetteVisible, setCassetteVisible }}
            >
              <Cassette />
            </AppContext.Provider>
            <HolographicStickert />
          </div>
          <span className="face-top"></span>
          <span className="face-left"></span>
          <span className="face-right"></span>
          <span className="face-bottom"></span>
          <div
            className={`container origin-left transition-transform duration-700 ${
              isCassetteVisible ? "active" : ""
            }`}
          >
            <img
              className="relative"
              data-atropos-offset="0"
              src="assets/front-page/oshi-no-ko.webp"
              alt=""
            />
            {/* piezas */}
            <img
              className="absolute left-[35px] top-[37.5%] w-[36%] md:left-11"
              data-atropos-offset="15"
              src="assets/front-page/hand-microphone.webp"
              alt=""
            />
            <img
              className="absolute right-[9px] top-[5.5%] w-[33%] md:right-3"
              data-atropos-offset="15"
              src="assets/front-page/rabbit.webp"
              alt=""
            />
            <img
              className="absolute right-[15.5%] top-[25%] w-[46.5%]"
              data-atropos-offset="15"
              src="assets/front-page/hand.webp"
              alt=""
            />
            {/* ... */}
            <img
              data-atropos-offset="30"
              className="absolute left-10 top-10 w-[30%]"
              src="assets/front-page/logo.webp"
              alt=""
            />
          </div>
        </Atropos>
      </div>
    </>
  );
}
