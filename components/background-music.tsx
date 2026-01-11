"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            window.removeEventListener("click", startAudio);
          })
          .catch((err) => console.log("Playback failed:", err));
      }
    };

    window.addEventListener("click", startAudio);

    return () => {
      window.removeEventListener("click", startAudio);
    };
  }, [isPlaying]);

  const toggleMusic = (e: React.MouseEvent) => {
    // Prevent the "window" click listener from firing if it's still active
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
        style={{ display: "none" }}
      />

      {/* Floating Control Button */}
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
          fontSize: "20px",
          backdropFilter: "blur(4px)",
        }}
        aria-label="Toggle Background Music"
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </>
  );
}
