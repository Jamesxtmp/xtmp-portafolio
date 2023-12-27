import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { HiChevronDoubleDown } from "react-icons/hi2";


import { Link } from 'wouter';
export default function Home () {

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center text-5xl">¡Hola!</div>
      <div className="text-center text-3xl">Soy Jaime Morales</div>
      <div className="w-[160px] aspect-square flex items-center justify-center rounded-full">
        <div className="w-[160px] aspect-square dark:bg-purple-900 bg-amber-900 flex items-center justify-center rounded-full blur-lg"></div>
        <img
          className="absolute w-[150px] aspect-square object-cover rounded-full"
          src="https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/288501725_101379759293568_5747191995011270462_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeG7XQah9y2uJ-l2y2dG1IW2EzPjoNWsjSYTM-Og1ayNJkGjvYxBC4M31l10jxrk5Vr4iIoW_AkjYSrzEuKZ99KV&_nc_ohc=XFp4ndawUV4AX8y4Kaf&_nc_ht=scontent-qro1-2.xx&oh=00_AfAnY90ncaIpKN_p1g6rS71db1Jl4aaoFMIjcr0USDQfBw&oe=6590EE6E"
          alt="Foto de perfil" />
      </div>
      <div className="text-center text-4xl">Ingeniería </div>
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
