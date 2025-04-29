
import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterButton from './NewsletterButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-maskani-dark-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">MASKANI WASI</h3>
            <p className="text-maskani-cream mb-4">
              Sembrando hoy un futuro sostenible a través de la conservación, educación y el desarrollo comunitario.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons - replace with actual social links */}
              <a href="#" aria-label="Facebook" className="hover:text-maskani-earth transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-maskani-earth transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth={2} />
                  <circle cx="12" cy="12" r="4" strokeWidth={2} />
                  <path strokeLinecap="round" strokeWidth={2} d="M18 6l0 0" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-maskani-earth transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-maskani-earth transition-colors">Inicio</Link></li>
              <li><Link to="/historia" className="hover:text-maskani-earth transition-colors">Historia</Link></li>
              <li><Link to="/donde-estamos" className="hover:text-maskani-earth transition-colors">Dónde Estamos</Link></li>
              <li><Link to="/vision" className="hover:text-maskani-earth transition-colors">Visión y Misión</Link></li>
              <li><Link to="/lodge" className="hover:text-maskani-earth transition-colors">Lodge</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl mb-4">Experiencias</h3>
            <ul className="space-y-2">
              <li><Link to="/excursiones" className="hover:text-maskani-earth transition-colors">Excursiones</Link></li>
              <li><Link to="/expediciones" className="hover:text-maskani-earth transition-colors">Expediciones</Link></li>
              <li><Link to="/experiencias" className="hover:text-maskani-earth transition-colors">Experiencias</Link></li>
              <li><Link to="/turismo-comunitario" className="hover:text-maskani-earth transition-colors">Turismo Comunitario</Link></li>
              <li><Link to="/medicina-ancestral" className="hover:text-maskani-earth transition-colors">Medicina Ancestral</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl mb-4">Contáctanos</h3>
            <address className="not-italic mb-4">
              <p>Provincia de Sucumbíos</p>
              <p>Ecuador</p>
              <p className="mt-2">Tel: +593 XXXXXXXX</p>
              <p>Email: info@maskaniwasi.org</p>
            </address>
            <NewsletterButton className="w-full" />
          </div>
        </div>

        <div className="border-t border-maskani-green mt-12 pt-8 text-sm text-center text-maskani-light-green">
          <p>&copy; {new Date().getFullYear()} MASKANI WASI. Todos los derechos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-maskani-earth transition-colors">Política de Privacidad</Link>
            <Link to="/terms" className="hover:text-maskani-earth transition-colors">Términos y Condiciones</Link>
            <Link to="/contact" className="hover:text-maskani-earth transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
