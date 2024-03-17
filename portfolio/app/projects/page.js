import React from 'react';

const Projects = () => {
  // Ejemplo de datos de proyectos
  const projects = [
    {
      id: 1,
      title: 'Ecommerce',
      description: 'Desarrollo de un ecommerce.',
      imageUrl: 'https://via.placeholder.com/300',
      tags: ['React', 'HTML', 'JavaScript'],
      githubUrl: 'https://github.com/ArcayuS8/Ecommerce.git'
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white shadow-md rounded-md p-4">
            <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <div className="flex justify-between">
              <div>
                {project.tags.map(tag => (
                  <span key={tag} className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">{tag}</span>
                ))}
              </div>
              <div>
                <a href={project.githubUrl} className="text-blue-500 hover:underline mr-2">Código</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
