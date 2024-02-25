import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '../container/Container';
import ProjectModel from './ProjectModel';

export default function Projects() {
  const [dataProjects, setDataProjects] = useState(null);
  const slider = useRef(null);

  useEffect(() => {
    const getDataProjects = async () => {
      const response = await fetch('/projects/projects.json');
      const dataProjectsJson = await response.json();
      setDataProjects(dataProjectsJson);
    };

    getDataProjects();
  }, []);

  if (!dataProjects) {
    return <Container><h1>CARREGANDO PROJETOS</h1></Container>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container id="projects">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center pt-32">Projetos</h2>
      <div className="relative">
        <Slider ref={slider} {...settings} className="mx-auto mt-10">
          {dataProjects.map((project, index) => (
            <ProjectModel
              key={index}
              projectName={project.projectName}
              projectPath={project.projectPath}
              projectImage={project.projectImage}
              projectInfo={project.projectInfo}
              style={{ height: '50vh' }}
            />
          ))}
        </Slider>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => slider.current.slickPrev()}
        >
          Anterior
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => slider.current.slickNext()}
        >
          Próximo
        </button>
      </div>
    </Container>
  );
}