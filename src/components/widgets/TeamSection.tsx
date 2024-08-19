'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { FaPlay, FaPause } from 'react-icons/fa';

const teamMembers = [
  { name: 'Brian', designation: 'AI Phone Agent', avatar: '/66895ecec9cbde93480b3c28_Memojis.webp', audio: 'https://files.tryflowdrive.com/org-b20df600-464f-4c06-a611-1729aa884040/file-5ce4a9cc-7e5c-4f98-94cb-d5a2cf5b6041_Brian-from-Ringly.io.mp3' },
  { name: 'Nova', designation: 'AI Phone Agent', avatar: '/66895f02542d420b95642a02_10.webp', audio: 'https://files.tryflowdrive.com/org-b20df600-464f-4c06-a611-1729aa884040/file-4ae49936-3fd5-4bfb-a04b-0286149ec2a5_Nova-from-Ringly.io.mp3' },
  { name: 'Andrew', designation: 'AI Phone Agent', avatar: '/668919056ea894767c4bfbd5_4.webp', audio: 'https://files.tryflowdrive.com/org-b20df600-464f-4c06-a611-1729aa884040/file-4adc0948-300e-485f-98c8-2fe9223099da_Andrew-from-Ringly.io.mp3' },
  { name: 'Shimmer', designation: 'AI Phone Agent', avatar: '/668919675290bacb85eb67f7_6.webp', audio: 'https://files.tryflowdrive.com/org-b20df600-464f-4c06-a611-1729aa884040/file-3d2bee8a-36ef-44da-b9eb-8915dba6a9aa_Shimmer-from-Ringly.io.mp3' },
  { name: 'Chloe', designation: 'AI Phone Agent', avatar: '/6689734675794f6a9407e1e1_5.webp', audio: '/https://files.tryflowdrive.com/org-b20df600-464f-4c06-a611-1729aa884040/file-ee006897-5cb0-48ed-8363-302224010508_Chloe-from-Ringly.io.mp3' },
];

const TeamSection = () => {
  const [isPlaying, setIsPlaying] = useState(Array(teamMembers.length).fill(false));
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const togglePlayPause = (index: number) => {
    const newPlayingState = [...isPlaying];

    // Pause all other audios
    audioRefs.current.forEach((audio, idx) => {
      if (idx !== index && audio) {
        audio.pause();
        newPlayingState[idx] = false;
      }
    });

    if (audioRefs.current[index]) {
      if (newPlayingState[index]) {
        audioRefs.current[index]?.pause();
      } else {
        audioRefs.current[index]?.play();
      }
    }

    newPlayingState[index] = !newPlayingState[index];
    setIsPlaying(newPlayingState);
  };

  return (
    <div>
      <h2 className='text-5xl font-bold mb-4 text-center'>Meet the AI Phone Agent Team</h2>
      <p className='text-gray-600 text-center mb-10'>Very Trained AI agents for different tasks including cold calling, information about the product etc.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 overflow-hidden">
            <Image
              src={member.avatar} // Avatar image
              alt={member.name}
              width={96}
              height={96}
              className="object-fit w-full h-full p-2"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{member.designation}</p>
          <button
            onClick={() => togglePlayPause(index)}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            {isPlaying[index] ? <FaPause /> : <FaPlay />}
          </button>
          <audio ref={(el) => (audioRefs.current[index] = el)} src={member.audio} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default TeamSection;


