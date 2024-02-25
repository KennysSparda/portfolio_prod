// ProjectModel.jsx
import React from 'react';

export default function ProjectModel({ projectName, projectPath, projectImage, projectInfo }) {
  return (
    <div className="flex items-center justify-center">
      {/* Imagem do Projeto com Moldura */}
      <div className="w-1/4 pr-4" style={{ height: '50vh', overflow: 'hidden' }}>
        <div className="border-8 border-blue-500 mb-4 flex items-center justify-center">
          <img src={projectImage} alt={projectName} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Detalhes do Projeto */}
      <div className="w-1/5">
        <h3 className="text-3xl font-bold mb-8">{projectName}</h3>

        {/* Tecnologias Usadas */}
        <div>
          <h4 className="text-xl font-bold mb-2">Tecnologias Usadas</h4>
          <p className="text-blue-700 mb-4">{projectInfo}</p>
        </div>

        {/* Botão para acessar o projeto */}
        <a
          href={projectPath}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-full inline-block hover:bg-blue-700"
        >
          Acessar Projeto
        </a>
      </div>
    </div>
  );
}
