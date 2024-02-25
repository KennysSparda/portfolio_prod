import React from 'react';
import ButtonHome from '../buttons/btnHome';
import BtnAbout from '../buttons/btnAbout';
import BtnProjects from '../buttons/btnProjects';

export default function Menu(props) {
  return (
    <nav className="menu bg-gray-800 absolute top-16 right-0 mt-2 p-2 rounded shadow-md">
      <ButtonHome function={props.function} />
      <BtnProjects function={props.function} navbar={true} />
      <BtnAbout function={props.function} />
    </nav>
  );
}
