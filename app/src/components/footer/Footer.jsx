import BtnGithub from '../buttons/btnGithub';
import BtnLinkedin from '../buttons/btnLinkedin';
import BtnWhatsapp from '../buttons/btnWhatsapp';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex items-center justify-center mb-8">
        <BtnGithub />
        <BtnLinkedin />
        <BtnWhatsapp />
      </div>
      <p className="text-center text-gray-500 mb-2">Atualizado em 20/02/2024 | Campo Largo, PR</p>
      <p className="text-center text-gray-500 mb-2">Versão do projeto: 4.0.0</p>
      <div className="text-center text-gray-500">© Kenny Vargas 2024</div>
    </footer>
  );
}
