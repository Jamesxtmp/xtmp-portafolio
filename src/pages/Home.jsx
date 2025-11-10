import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { HiChevronDoubleDown } from "react-icons/hi2";
import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { app } from '../../firebase';

// Ya no importamos 'Link' de 'wouter' porque todo está en una página
// import { Link } from 'wouter'; 

export default function Home () {
  const [photoURL, setPhotoURL] = useState(null);
  
  useEffect(() => {
    const storage = getStorage(app);
    const imageRef = ref(storage, 'MyPhotos/My030925.webp');
    
    getDownloadURL(imageRef)
      .then(url => setPhotoURL(url))
      .catch(err => {
        console.error('Error obteniendo imagen desde Storage:', err);
      });
  }, []);

  return (
    // Usamos <main> como contenedor principal
    <main>
      {/* HERO SECTION (PORTADA)
        Usamos min-h-screen para que ocupe al menos toda la pantalla 
        y 'relative' para posicionar la flecha de scroll
      */}
      <div className="flex flex-col items-center justify-center gap-4 min-h-screen text-center relative p-4 pb-36"> {/* Añadido justify-center y padding */}
        
        <div className="text-5xl">¡Hola!</div>
        
        <div className="text-3xl">Soy Jaime Morales</div>
        
        <div className="w-[160px] aspect-square flex items-center justify-center rounded-full mt-4"> {/* Añadido mt-4 */}
          <div className="w-[160px] aspect-square dark:bg-purple-900 bg-amber-900 flex items-center justify-center rounded-full blur-lg"></div>
          <img
            className="absolute w-[150px] aspect-square object-cover rounded-full"
            src={photoURL}
            alt="Foto de perfil" />
        </div>
        
        <TypeAnimation
          sequence={[
            ' Desarrollo Web',
            2000, 
            ' Computación',
            2000,
            ' Electrónica',
            2000,
            ' Automatización',
            2000,
            ' Aplicaciones Móviles',
            2000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }} // Ajustado tamaño para móviles
          repeat={Infinity}
          className="h-[60px]" // Altura fija para evitar saltos de layout
        />
        
        <div className="text-center text-4xl flex gap-8 mt-8"> {/* Reducido margen superior */}
          <a href="https://github.com/Jamesxtmp" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/jaime-morales-cer%C3%B3n-43a237213/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        
        {/* FLECHA DE SCROLL
          Cambiamos el <Link> por un <a> que apunta al ID 'about'
        */}
        <a href='#about' className='w-full h-36 absolute bottom-0'>
          <div className="relative top-8 justify-center text-4xl flex opacity-50 animate-bounce w-full">
            <HiChevronDoubleDown />
          </div>
        </a>
      </div>

      {/* INICIO DEL CONTENIDO DEL CV
        Aquí comienzan las nuevas secciones
      */}
      <div className="container mx-auto px-4 max-w-4xl"> {/* Contenedor centrado */}

        {/* SECCIÓN ACERCA DE MÍ */}
        <section id="about" className="p-4 py-16"> {/* 'id' para el ancla y 'py-16' para espaciado */}
          <h2 className="text-3xl font-bold mb-8 text-center">Acerca de mí</h2>
          <div className="text-lg text-center">
            <p className="mb-4">
              Apasionado por el aprendizaje constantemente autodidacta en las áreas
              [cite_start]que más disfruto principalmente tecnología. [cite: 18]
            </p>
            <p>
              Con una acelerada capacidad
              de aprender, un temperamento tranquilo
              aun en situaciones de estrés, siempre
              [cite_start]cumpliendo con las normas establecidas. [cite: 19]
            </p>
          </div>
        </section>

        <hr className="my-8 border-gray-600" />

        {/* SECCIÓN EXPERIENCIA */}
        <section id="experience" className="p-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Experiencia</h2>
          <div className="max-w-3xl mx-auto">
            
            <div className="mb-6 p-6 border border-gray-700 rounded-lg shadow-lg">
              [cite_start]<h3 className="text-xl font-semibold">Operador - Auxiliar de Mecánico Especialista [cite: 5]</h3>
              <p className="text-md italic text-purple-300">Arcomex S.A. de C.V. [cite_start]Planta Altzayanca [cite: 6]</p>
              [cite_start]<p className="text-sm text-gray-400 mb-3">2023-2025 [cite: 7]</p>
              <p>
                Inicié como operador y posteriormente me postulé, siendo
                seleccionado para el puesto de Auxiliar de Mecánico Especialista,
                estuve encargado del mantenimiento preventivo y correctivo de
                [cite_start]maquinaria electroneumática especializada en prueba eléctrica. [cite: 8]
              </p>
            </div>

            <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              [cite_start]<h3 className="text-xl font-semibold">Capturista [cite: 9]</h3>
              <p className="text-md italic text-purple-300">Full Service S.A. de C.V. [cite_start]Planta Altzayanca [cite: 10]</p>
              [cite_start]<p className="text-sm text-gray-400 mb-3">2022-2023 [cite: 11]</p>
              <p>
                Encargado de digitalizar el contenido de múltiples expedientes
                físicos para la preservación de información y agilizar su posterior
                [cite_start]consulta digital. [cite: 12]
              </p>
            </div>

          </div>
        </section>

        <hr className="my-8 border-gray-600" />

        {/* SECCIÓN EDUCACIÓN */}
        <section id="education" className="p-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Educación</h2>
          <div className="max-w-3xl mx-auto">

            <div className="mb-6 p-6 border border-gray-700 rounded-lg shadow-lg">
              [cite_start]<h3 className="text-xl font-semibold">Ingeniería en Sistemas Computacionales [cite: 21]</h3>
              [cite_start]<p className="text-md italic text-purple-300">Instituto tecnológico superior de Libres, Puebla [cite: 23]</p>
              [cite_start]<p className="text-sm text-gray-400 mb-3">2022 - Hoy [cite: 22]</p>
              <p>
                Actualmente me encuentro cursando el septimo semestre de mi
                carrera con un promedio académico destacado.
                He adquirido
                conocimientos sólidos en áreas como telecomunicaciones, bases
                de datos SQL y programación en lenguajes como java, python y
                [cite_start]$C++/C\#$. [cite: 24]
              </p>
            </div>

            <div className="mb-6 p-6 border border-gray-700 rounded-lg shadow-lg">
              [cite_start]<h3 className="text-xl font-semibold">Ingeniería en Automatización y Autotrónica [cite: 25]</h3>
              [cite_start]<p className="text-md italic text-purple-300">BUAP Complejo Regional, San José Chiapa [cite: 26]</p>
              [cite_start]<p className="text-sm text-gray-400 mb-3">2019-2021 [cite: 27]</p>
              <p>
                Cursé hasta el cuarto semestre, adquiriendo conocimientos
                fundamentales en áreas como electrónica, mecánica, neumática y
                [cite_start]gestión. [cite: 28]
              </p>
            </div>

            <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              [cite_start]<h3 className="text-xl font-semibold">Técnico en programación [cite: 29]</h3>
              [cite_start]<p className="text-md italic text-purple-300">CBTIS 061 Huamantla [cite: 30]</p>
              [cite_start]<p className="text-sm text-gray-400 mb-3">2016-2019 [cite: 31]</p>
              <p>
                [cite_start]Finalicé mi carrea técnica en la especialidad de programación. [cite: 32]
              </p>
            </div>

          </div>
        </section>

        <hr className="my-8 border-gray-600" />
        
        {/* SECCIÓN PROYECTOS */}
        <section id="projects" className="p-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
          <div className="max-w-3xl mx-auto">
            
            <div className="mb-6 p-6 border border-gray-700 rounded-lg shadow-lg">
              [cite_start]<h3 className="text-xl font-semibold">Robots para competición académica [cite: 42]</h3>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>
                  Un robot otto con la capacidad de caminar a dos pies y mover un
                  [cite_start]brazo, construido con impresión 3D. [cite: 43]
                </li>
                <li>
                  Un robot de cuatro ruedas omnidireccionales capaz de moverse en
                  ocho direcciones, controlado bluetooth por medio de una app móvil
                  [cite_start]de mi desarrollo. [cite: 44]
                </li>
              </ul>
            </div>

            <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              [cite_start]<h3 className="text-xl font-semibold">Catalogo Web [cite: 45]</h3>
              <p className="mt-3">
                Desarrollado con Supabase y React, una página web con la
                capacidad de almacenar y administrar datos persistentes en la
                [cite_start]nube que ofrece una interfaz simple y amigable al usuario. [cite: 46]
              </p>
            </div>

          </div>
        </section>

        <hr className="my-8 border-gray-600" />

        {/* SECCIÓN HABILIDADES */}
        <section id="skills" className="p-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Habilidades</h2>
          <div className="max-w-3xl mx-auto p-6 border border-gray-700 rounded-lg shadow-lg">
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-lg">
              [cite_start]<li>Ofimática (nivel intermedio-avanzado). [cite: 34]</li>
              [cite_start]<li>Mantenimiento de equipos de cómputo. [cite: 35]</li>
              [cite_start]<li>Seguridad y salud ocupacional (ISO 45001). [cite: 36]</li>
              [cite_start]<li>Gestión de calidad y medio ambiente (ISO 9001, ISO 14001). [cite: 37]</li>
              [cite_start]<li>Interpretación de diagramas electrónicos y neumáticos. [cite: 38]</li>
              [cite_start]<li>Manejo de herramientas y maquinaria industrial. [cite: 39]</li>
              [cite_start]<li>Inglés nivel B1. [cite: 40]</li>
            </ul>
          </div>
        </section>

        {/* Espaciador final */}
        <div className="h-24"></div>
      </div>
    </main>
  )
}