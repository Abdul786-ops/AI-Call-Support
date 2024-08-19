'use client';


import { useState, useRef } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-full group mb-20">
      <video
        ref={videoRef}
        src="/AirAI.mp4"
        width="100%"
        height="100%"
        controls={false}
        className="w-full h-full object-cover"
        onClick={handlePlayPause}
      />
      <button
        className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={handlePlayPause}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white"
          viewBox="0 0 24 24"
          fill="#fff"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isPlaying ? (
            // Pause Icon
            <g>
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </g>
          ) : (
            // Play Icon
            <polygon points="5 3 19 12 5 21 5 3" />
          )}
        </svg>
      </button>
    </div>
  );
};

export default VideoSection;
