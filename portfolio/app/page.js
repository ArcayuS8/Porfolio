// App/Home.js
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">¡Bienvenido a mi Porfolio!</h1>
      <p className="text-lg mb-6">
        Soy Jose María, un apasionado desarrollador web con algo de experiencia en la creación de aplicaciones web
        modernas y atractivas.
      </p>
      <p className="text-lg mb-6">
        En este porfolio, te presentaré una muestra de mis proyectos, habilidades y experiencia profesional.
        ¡Espero que encuentres algo que te interese!
      </p>
      <div className="flex justify-center">
        <Link href="/projects">
          <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
            Ver Proyectos
          </div>
        </Link>
        <Link href="/about">
          <div className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Sobre Mí
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;