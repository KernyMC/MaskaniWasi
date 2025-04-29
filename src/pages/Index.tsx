
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="about" className="py-20 bg-maskani-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display text-maskani-dark-green text-center mb-12">
            Bienvenidos a Maskani Wasi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                En el corazón de la Amazonía ecuatoriana, Maskani Wasi se erige como un proyecto 
                integrador que busca proteger el bosque tropical y la extraordinaria riqueza 
                cultural que alberga esta región única en el planeta.
              </p>
              <p>
                A través de iniciativas sostenibles, trabajamos para responder a los desafíos 
                socioambientales de este territorio, promoviendo la conservación biológica y 
                el desarrollo comunitario en perfecta armonía con la naturaleza.
              </p>
            </div>
            <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder image - replace with actual image in production */}
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80" 
                alt="Bosque amazónico" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display text-maskani-dark-green text-center mb-12">
            Nuestras Iniciativas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-display font-semibold mb-3 text-maskani-dark-green">Conservación</h3>
              <p>
                Protegemos el bosque tropical amazónico a través de estrategias de conservación 
                y gestión sostenible de recursos naturales, manteniendo la biodiversidad y 
                los servicios ecosistémicos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-display font-semibold mb-3 text-maskani-dark-green">Educación Ambiental</h3>
              <p>
                Desarrollamos programas educativos como "El Pequeño Explorador", que fomentan 
                la conciencia ambiental y el conocimiento del entorno natural en niños y jóvenes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-display font-semibold mb-3 text-maskani-dark-green">Desarrollo Comunitario</h3>
              <p>
                Implementamos proyectos que fortalecen las economías locales, preservando la riqueza 
                cultural de las comunidades indígenas y mejorando su calidad de vida.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-maskani-dark-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-8">
            Descubre Maskani Wasi Lodge
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Una experiencia única en el corazón de la selva amazónica. Alojamiento sostenible, 
            excursiones guiadas y la oportunidad de conectar con la naturaleza.
          </p>
          <div className="mt-6">
            <a 
              href="https://www.booking.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-maskani-dark-green font-medium py-3 px-8 rounded-md hover:bg-maskani-cream transition-colors"
            >
              Reservar en Booking.com
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
