import { useState, useRef, createContext } from "react";

export const ContextAnime = createContext();

export default function ContextProvider({ children }) {
  const [isCassetteVisible, setCassetteVisible] = useState(false);

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

  const toggleCassetteVisible = () => {
    toggleAudioPlayPause();
    setCassetteVisible(!isCassetteVisible);
  };

  return (
    <ContextAnime.Provider
      value={{
        isCassetteVisible,
        setCassetteVisible,
        toggleCassetteVisible,
        toggleAudioPlayPause,
        audioRef,
      }}
    >
      {children}
    </ContextAnime.Provider>
  );
}
