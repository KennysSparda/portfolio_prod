import React, { useEffect, useRef } from 'react';

export default function Container(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Pode ajustar esse valor conforme necessário
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Container está visível na tela, pode adicionar suas animações aqui
          containerRef.current.classList.add('fade-in'); // Adicione a classe de animação desejada
          observer.unobserve(entry.target); // Para de observar após a animação ocorrer
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(containerRef.current);

    // Cleanup: Desconecta o observador quando o componente é desmontado
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} id={props.id} className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto">{props.children}</div>
    </section>
  );
}
