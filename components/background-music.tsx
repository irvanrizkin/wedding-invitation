"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleFirstClick = () => {
      if (audioRef.current && !hasStarted) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          })
          .catch((err) => console.log("Autoplay failed:", err));

        window.removeEventListener("click", handleFirstClick);
      }
    };

    if (!hasStarted) {
      window.addEventListener("click", handleFirstClick);
    }

    return () => {
      window.removeEventListener("click", handleFirstClick);
    };
  }, [hasStarted]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/tak-sebebas-merpati-piano.MP3"
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          background: "rgba(0, 0, 0, 0.6)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(4px)",
        }}
        aria-label="Toggle Background Music"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </>
  );
}
