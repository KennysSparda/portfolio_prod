import React, { useState, useEffect } from 'react';
import Icon from '../icon/Icon';

export default function Perfil() {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [displayProfession, setDisplayProfession] = useState('');
  const imageSrc = 'img/perfil.jpg';
  const name = 'Kenny Vargas';
  const profession = 'Programador';

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoading(false);
      setImageLoaded(true);

      // Inicia o efeito de digitação após o carregamento da imagem
      startTypingEffect();
    };
    image.src = imageSrc;
  }, []);

  const startTypingEffect = () => {
    let nameIndex = 0;

    const typingInterval = setInterval(() => {
      setDisplayName((prevName) => name.slice(0, nameIndex + 1));
      nameIndex++;

      if (nameIndex === name.length) {
        clearInterval(typingInterval);
        // Adiciona um espaço entre o nome e a profissão
        setTimeout(() => startProfessionTypingEffect(), 500);
      }
    }, 100);
  };

  const startProfessionTypingEffect = () => {
    let professionIndex = 0;

    const typingInterval = setInterval(() => {
      setDisplayProfession((prevProfession) => profession.slice(0, professionIndex + 1));
      professionIndex++;

      if (professionIndex === profession.length) {
        clearInterval(typingInterval);
      }
    }, 100);
  };

  return (
    <div className="text-center mb-8">
      {loading ? (
        <div>
          <div>
            <Icon type="1" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="border-8 border-blue-500 rounded-full overflow-hidden mb-4">
            <img className="w-32 h-32 object-cover" src={imageSrc} alt="Perfil" />
          </div>
          <h1 className="text-4xl font-bold">{displayName}</h1>
          <h3 className="text-xl">{displayProfession}</h3>
        </div>
      )}
    </div>
  );
}
