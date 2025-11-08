import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { HiChevronDoubleDown } from "react-icons/hi2";
import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { app } from '../../firebase';

import { Link } from 'wouter';
export default function Home () {
const [photoURL, setPhotoURL] = useState(null);
useEffect(() => {
    const storage = getStorage(app);
    // ruta dentro del storage (por ejemplo: 'avatars/mi-foto.jpg')
    const imageRef = ref(storage, 'My030925.webp');
    getDownloadURL(imageRef)
      .then(url => setPhotoURL(url))
      .catch(err => {
        console.error('Error obteniendo imagen desde Storage:', err);
      });
  }, []);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center text-5xl">¡Hola!</div>
      <div className="text-center text-3xl">Soy Jaime Morales</div>
      <div className="w-[160px] aspect-square flex items-center justify-center rounded-full">
        <div className="w-[160px] aspect-square dark:bg-purple-900 bg-amber-900 flex items-center justify-center rounded-full blur-lg"></div>
        <img
          className="absolute w-[150px] aspect-square object-cover rounded-full"
          src={photoURL ?? "https://via.placeholder.com/150"}
          alt="Foto de perfil" />
      </div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          ' Mecánica',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          ' Computacional',
          2000,
          ' Electrónica',
          2000,
          ' Automatización',
          2000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '3em', display: 'inline-block' }}
        repeat={Infinity}
      />
      <div className="text-center text-4xl flex gap-8 mt-20">
        <a href="https://github.com/Jamesxtmp" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/jaime-morales-cer%C3%B3n-43a237213/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
      <Link href='/about'>
        <a className='w-full h-36 absolute bottom-0'>
          <div className="relative top-8 justify-center text-4xl flex opacity-50 animate-bounce w-full">
            <HiChevronDoubleDown />
          </div>
        </a>
      </Link>
    </div>
  )
}
