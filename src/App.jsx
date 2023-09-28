import { useContext } from "react";

import Atropos from "atropos/react";
import "atropos/css";

import { Cassette } from "./components/Cassette";
import { HolographicStickert } from "./components/Stickerts";

import { ContextAnime } from "./context/ContextProvider";

export default function App() {
  const {
    toggleCassetteVisible,
    isCassetteVisible,
    audioRef,
    setCassetteVisible,
  } = useContext(ContextAnime);

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
          innerClassName={`overflow-visible after:w-full after:absolute after:h-full after:block after:top-0 after:left-0 before:absolute before:w-full before:block before:h-full before:top-0 before:left-0 before:z-10 ${
            isCassetteVisible
              ? "before:animate-[hue-infinite_10s_infinite]"
              : ""
          }`}
          shadowOffset={50}
        >
          <audio
            ref={audioRef}
            src="songs/Idol-YOASOBI.mp3"
            preload="auto"
            onEnded={() => setCassetteVisible(false)}
          />
          <div className="container-content absolute flex h-full w-full justify-end">
            <Cassette />
            <HolographicStickert />
          </div>
          <span className="face-top" />
          <span className="face-top" />
          <span className="face-left" />
          <span className="face-right" />
          <span className="face-bottom" />
          <div
            className={`container origin-left transition-transform duration-700 ${
              isCassetteVisible ? "active" : ""
            }`}
          >
            <img
              className="relative"
              data-atropos-offset="0"
              src="front-page/oshi-no-ko.webp"
              alt="Imagen frontal del contenedor del cassette"
            />
            <img
              className="absolute left-[35px] top-[37.5%] w-[36%] md:left-11"
              data-atropos-offset="15"
              src="front-page/hand-microphone.webp"
              alt="Micrófono de Ai"
            />
            <img
              className="absolute right-[9px] top-[5.5%] w-[33%] md:right-3"
              data-atropos-offset="15"
              src="front-page/rabbit.webp"
              alt="Decorativo del cabello de Ai en forma de conejo con un lazo"
            />
            <img
              className="absolute right-[15.5%] top-[25%] w-[46.5%]"
              data-atropos-offset="15"
              src="front-page/hand.webp"
              alt="Mano izquierda de Ai"
            />
            <img
              data-atropos-offset="30"
              className="absolute left-10 top-10 w-[30%]"
              src="front-page/logo.webp"
              alt="Logo del anime Oshi No Ko"
            />
          </div>
        </Atropos>
      </div>
    </>
  );
}
