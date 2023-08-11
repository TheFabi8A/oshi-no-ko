import { useContext } from "react";
import { CompactCassetteSVG, DolbySystemSVG } from "../svg";
import { AppContext } from "../../App";

export default function Cassette() {
  const { isCassetteVisible } = useContext(AppContext);
  return (
    <>
      <div className="cassette relative flex h-52 w-full flex-col justify-between">
        {/* faces */}
        <span className="face-top-cassette"></span>
        <span className="face-right-cassette"></span>
        <span className="face-left-cassette"></span>
        <span className="face-bottom-cassette"></span>
        {/* ... */}
        <span
          className="absolute -left-[2px] bottom-10 h-10 w-[3px] bg-[#303030] before:absolute before:-bottom-[2px] before:left-[1px] before:h-1 before:w-1 before:-rotate-45 before:bg-[#303030] 
        after:absolute after:-top-[2px] after:left-[1px] after:h-1 after:w-1 after:rotate-45 after:bg-[#303030]"
        ></span>
        <span className="screw left-1 top-1"></span>
        <span className="screw right-1 top-1"></span>
        <span className="screw bottom-1 left-1"></span>
        <span className="screw bottom-1 right-1"></span>
        <div className="container-content-cassette relative left-[10%] top-[10%] z-10 h-3/5 w-4/5">
          {/* esquinas redondeadas */}
          <span className="absolute -top-[2px] left-[5px] z-10 h-[26px] w-3 rotate-45 rounded-md bg-white"></span>
          <span className="absolute -left-[2px] -top-[11px] h-7 w-3 rotate-45 bg-[#303030]"></span>

          <span className="absolute -top-[2px] right-[5px] z-10 h-[26px] w-3 -rotate-45 rounded-md bg-white"></span>
          <span className="absolute -right-[2px] -top-[11px] h-7 w-3 -rotate-45 bg-[#303030]"></span>
          {/* ... */}
          <div className="flex flex-col px-2">
            <div className="relative z-10 flex w-full items-center justify-between">
              <div className="flex flex-col items-center text-sm">
                <p>サイド</p>
                <span className="rounded-md border border-black px-2 font-black">
                  A
                </span>
              </div>
              <div>
                <h1 className="text-md text-center font-black">アイドル</h1>
                <p className="text-center text-xs">YOASOBI</p>
              </div>
              <div className="flex flex-col items-center text-sm">
                <p>無料</p>
                <span className="rounded-md border border-black px-2 font-black">
                  PSD
                </span>
              </div>
            </div>
            <div className="relative mt-2 flex h-11 w-[70%] items-center justify-between self-center rounded-[2.5rem] bg-[#303030] p-2">
              <div className="absolute bottom-0 left-1/4 flex w-1/2 items-center justify-between text-[6px] font-bold text-white">
                <div className="absolute -top-2 flex w-full items-start justify-around">
                  <span>|</span>
                  <span>I</span>
                  <span>I</span>
                  <span>I</span>
                  <span>I</span>
                  <span>|</span>
                  <span>I</span>
                  <span>I</span>
                  <span>I</span>
                  <span>I</span>
                  <span>|</span>
                </div>
                <span>100</span>
                <span className="inline-block pr-1">50</span>
                <span className="inline-block pr-[2.5px]">0</span>
              </div>
              <span
                className={`outline-blacks relative h-7 w-7 overflow-hidden rounded-full border bg-[#f2be4a] shadow-[inset_0_0_10px_0_#000] outline outline-2 ${
                  isCassetteVisible ? "animate-spin" : ""
                }`}
              >
                <span className="absolute -left-[2px] top-[calc(50%_-_4px)] h-2 w-1 rotate-90 rounded-t-full bg-white"></span>
                <span className="absolute -top-[2px] left-[calc(25%_-_4px)] h-2 w-1 -rotate-[30deg] rounded-b-full bg-white"></span>
                <span className="absolute -top-[2px] right-[calc(25%_-_4px)] h-2 w-1 rotate-[30deg] rounded-b-full bg-white"></span>
                <span className="absolute -right-[2px] top-[calc(50%_-_4px)] h-2 w-1 -rotate-90 rounded-t-full bg-white"></span>
                <span className="absolute -bottom-[2px] left-[calc(25%_-_4px)] h-2 w-1 rotate-[30deg] rounded-t-full bg-white"></span>
                <span className="absolute -bottom-[2px] right-[calc(25%_-_4px)] h-2 w-1 -rotate-[30deg] rounded-t-full bg-white"></span>
              </span>
              <span className="relative flex h-5 w-1/2 items-center self-start overflow-hidden rounded-sm bg-[#f2be4a] pt-2">
                <span className="glass-tape-reel absolute left-0 top-0 z-10 h-full w-full origin-top bg-black/20 outline outline-1 outline-white backdrop-blur-[0.75px]"></span>
                <span
                  className={`tape-reel-1 absolute -left-[74px] block h-20 w-20 scale-[2] rounded-full ${
                    isCassetteVisible ? "active" : ""
                  }`}
                ></span>
                <span
                  className={`tape-reel-2 absolute -right-[74px] block h-20 w-20 scale-125 rounded-full ${
                    isCassetteVisible ? "active" : ""
                  }`}
                ></span>
              </span>
              <span
                className={`relative h-7 w-7 overflow-hidden rounded-full border bg-[#f2be4a] shadow-[inset_0_0_10px_0_#000] outline outline-2 outline-black ${
                  isCassetteVisible ? "animate-spin" : ""
                }`}
              >
                <span className="absolute -left-[2px] top-[calc(50%_-_4px)] h-2 w-1 rotate-90 rounded-t-full bg-white"></span>
                <span className="absolute -top-[2px] left-[calc(25%_-_4px)] h-2 w-1 -rotate-[30deg] rounded-b-full bg-white"></span>
                <span className="absolute -top-[2px] right-[calc(25%_-_4px)] h-2 w-1 rotate-[30deg] rounded-b-full bg-white"></span>
                <span className="absolute -right-[2px] top-[calc(50%_-_4px)] h-2 w-1 -rotate-90 rounded-t-full bg-white"></span>
                <span className="absolute -bottom-[2px] left-[calc(25%_-_4px)] h-2 w-1 rotate-[30deg] rounded-t-full bg-white"></span>
                <span className="absolute -bottom-[2px] right-[calc(25%_-_4px)] h-2 w-1 -rotate-[30deg] rounded-t-full bg-white"></span>
              </span>
            </div>
            <div className="flex w-full items-center gap-12">
              <DolbySystemSVG />
              <p className="text-center text-[9px] font-bold text-black">
                デザイン:
                <br />
                <em>TheFabi8A</em>
              </p>
              <CompactCassetteSVG />
            </div>
          </div>
        </div>
        <div className="clip-trapezoid relative z-10 h-12 w-[60%] self-center bg-[#2b2b2b]">
          <span className="clip-trapezoid absolute top-1 -z-10 h-full w-full scale-95 bg-[#303030] blur-xl"></span>
          <span className="absolute bottom-2 left-5 z-10 h-4 w-4 rounded-full bg-[#f2be4a] shadow-[inset_1.5px_-1.5p_0_0_#ef5b82]"></span>
          <span className="absolute bottom-2 right-5 z-10 h-4 w-4 rounded-full bg-[#f2be4a] shadow-[inset_-1.5px_-1.5px_0_0_#ef5b82]"></span>
          <span className="absolute bottom-4 right-12 z-10 h-3 w-3 rounded-sm bg-[#f2be4a] shadow-[inset_-1.5px_-1.5px_0_0_#ef5b82]"></span>
          <span className="absolute bottom-4 left-12 z-10 h-3 w-3 rounded-sm bg-[#f2be4a] shadow-[inset_1.5px_-1.5px_0_0_#ef5b82]"></span>
        </div>
        <span className="screw bottom-7 left-[calc(50%_-_6px)]"></span>
      </div>
    </>
  );
}
