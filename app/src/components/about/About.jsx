import React from 'react';
import Button from '../buttons/Button';
import Container from '../container/Container';
import Icon from '../icon/Icon';

const About = () => {
  return (
    <Container id="about" className="py-16">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Sobre mim</h2>
        <div id="text-about" className="mb-8 text-lg md:text-xl lg:text-2xl mx-auto">
          <p>
            Olá, meu nome é Kenny de Souza Vargas. Estou em transição de carreira e já trabalhei como fiscal de caixa,
            onde descobri minha paixão por solucionar problemas.
          </p>
          <p>
            Recentemente, com pouco mais de um ano, consegui ingressar na área de TI na empresa Atacadão. Atualmente, trabalho
            como Assistente de Informática, participando de projetos internos com JS, PHP e ShellScript.
          </p>
          <p>Meu objetivo é conseguir um cargo como <strong>Programador</strong> utilizando <strong>Javascript</strong></p>
        </div>
      </div>
      <hr className="my-8" />
      <h3 className="text-center text-2xl font-bold mb-4">Tecnologias</h3>
      <div id="boxTechnologies" className="grid grid-cols-2 md:grid-cols-7 gap-8">
        {renderTechnologyButton('Linux', 'https://www.linux.org/', 14)}
        {renderTechnologyButton('GIT', 'https://git-scm.com/', 6)}
        {renderTechnologyButton('HTML 5', 'https://developer.mozilla.org/en-US/docs/Web/HTML', 12)}
        {renderTechnologyButton('CSS 3', 'https://developer.mozilla.org/en-US/docs/Web/CSS', 11)}
        {renderTechnologyButton('JS', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 10)}
        {renderTechnologyButton('Ruby', 'https://www.ruby-lang.org/pt/', 19)}
        {renderTechnologyButton('Python', 'https://www.python.org/', 15)}
        {renderTechnologyButton('ChatGPT', 'https://openai.com/chatgpt', 21)}
        {renderTechnologyButton('ReactJS', 'https://react.dev', 8)}
        {renderTechnologyButton('NextJS', 'https://nextjs.org', 7)}
        {renderTechnologyButton('Bootstrap', 'https://getbootstrap.com/', 18)}
        {renderTechnologyButton('NodeJS', 'https://nodejs.org/en/about', 9)}
        {renderTechnologyButton('Rails', 'https://rubyonrails.org/', 20)}
        {renderTechnologyButton('MySQL', 'https://www.mysql.com/', 17)}
      </div>
      <hr className="my-8" />
      <div id="boxTechnologiesBelow">
        {/* (Código anterior mantido) */}
      </div>
    </Container>
  );
};

const renderTechnologyButton = (label, path, iconType) => (
  <div className="flex items-center mb-4">
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-transparent hover:bg-opacity-80 text-blue-500 font-bold py-2 px-4 rounded transition duration-300 ease-in-out backdrop-filter backdrop-blur-lg flex items-center"
    >
      <Icon type={iconType} className="mr-2" />
      <strong>{label}</strong>
    </a>
  </div>
);



export default About;
