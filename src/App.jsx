import Atropos from "atropos/react";
import "atropos/css";
import { useState } from "react";

export default function App() {
  const [isCassetteVisible, setCassetteVisible] = useState(false);
  const toggleCassetteVisible = () => {
    setCassetteVisible(!isCassetteVisible);
    console.log(isCassetteVisible);
  };

  return (
    <>
      <div className="absolute top-[calc(50%_-_80px)] h-40 w-96 bg-purple-500"></div>

      <div id="app" className="app relative w-full max-w-xs">
        <Atropos
          onClick={toggleCassetteVisible}
          highlight={true}
          className="relative cursor-pointer"
          shadow={false}
          activeOffset={10}
          shadowScale={1}
          rotateXMax={45}
          rotateYMax={45}
          scaleClassName=""
          rotateClassName=""
          innerClassName="overflow-visible"
          shadowOffset={50}
        >
          <span className="face-top"></span>
          <span className="face-left"></span>
          <span className="face-right"></span>
          <span className="face-bottom"></span>
          <div className="container-content absolute grid h-full w-full place-items-center bg-white">
            <div className="h-40 w-64 bg-blue-500"></div>
          </div>
          <div
            className={`container origin-left transition-transform duration-700 ${
              isCassetteVisible ? "active" : ""
            }`}
          >
            <img
              className="relative"
              data-atropos-offset="0"
              src="assets/oshi-no-ko.webp"
              alt=""
            />
            {/* piezas */}
            <img
              className="absolute left-[35px] top-[37.5%] w-[36%] md:left-11"
              data-atropos-offset="15"
              src="assets/hand-microphone.webp"
              alt=""
            />
            <img
              className="absolute right-[9px] top-[5.5%] w-[33%] md:right-3"
              data-atropos-offset="15"
              src="assets/rabbit.webp"
              alt=""
            />
            <img
              className="absolute right-[15.5%] top-[25%] w-[46.5%]"
              data-atropos-offset="15"
              src="assets/hand.webp"
              alt=""
            />
            {/* ... */}
            <img
              data-atropos-offset="30"
              className="absolute left-10 top-10 w-[30%]"
              src="assets/logo.webp"
              alt=""
            />
          </div>
        </Atropos>
      </div>
    </>
  );
}
