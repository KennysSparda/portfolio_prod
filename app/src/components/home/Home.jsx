// Home.jsx
import React from 'react';
import Container from '../container/Container';
import BtnProjects from '../buttons/btnProjects';
import BtnGithub from '../buttons/btnGithub';
import BtnLinkedin from '../buttons/btnLinkedin';
import Perfil from '../perfil/Perfil';

const Home = () => {
  return (
    <Container>
      <div id="home" className="flex flex-col md:flex-row justify-center items-center h-screen">
        <div id="boxHome" className="flex flex-wrap md:flex-nowrap w-full max-w-6xl">
          <div id="boxHomeLeft" className="w-full md:w-2/3">
            <Perfil />
          </div>
          <div id="boxHomeRight" className="w-full md:w-1/3 p-4 md:p-8 bg-gray-200">
            <div id="content-right" className="flex flex-col space-y-4">
              <BtnProjects isHomeButton={true} />
              <BtnGithub isHomeButton={true} />
              <BtnLinkedin isHomeButton={true} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
