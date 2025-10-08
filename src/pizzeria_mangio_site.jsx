export default function PizzeriaMangio() {
  const pizzas = [
    { name: 'Margherita', ingredients: 'Salsa di pomodoro, mozzarella', price: '€5,00', img: 'https://i.imgur.com/buIaT59.png' },
    { name: 'Diavola', ingredients: 'Salsa di pomodoro, mozzarella, ventricina', price: '€6,50', img: 'https://i.imgur.com/55G73Nk.png' },
    { name: 'Capricciosa', ingredients: 'Salsa di pomodoro, mozzarella, funghi champignon, olive riviera, carciofi, uova, prosciutto crudo', price: '€7,00', img: 'https://i.imgur.com/SPQzqMt.png' },
    { name: 'Tutto bufala', ingredients: 'Salsa di pomodoro, pachino, bufala, battuto di prezzemolo', price: '€7,50', img: 'https://i.imgur.com/Q9SIPsQ.png' },
    { name: 'Quattro Formaggi', ingredients: 'Mozzarella, provola affumicata, gorgonzola, bufala', price: '€7,00', img: 'https://i.imgur.com/Zu7bwvY.png' },
    { name: 'Ortolana', ingredients: 'Cicoria, zucchine, broccoli, funghi, olive, peperoni, pachino', price: '€7,00', img: 'https://i.imgur.com/Xthjq00.jpeg' }
  ];

  const gallery = [
    'https://i.imgur.com/fwGPCRi.jpeg',
    'https://i.imgur.com/CpKjxT5.jpeg',
    'https://i.imgur.com/gdWfwre.jpeg'
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=1800&q=80"
          alt="Pizza Margherita"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg [text-shadow:2px_2px_8px_rgba(0,0,0,0.8)]">
            La pizza che ami, a Portuense, pronta in un click!
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-md [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
            Ingredienti freschi e impasto a lunga lievitazione, consegnati caldi a casa tua.
          </p>
          <a
            href="https://wa.me/393895398409?text=Ciao!%20Vorrei%20ordinare%20una%20pizza."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ordina Ora su WhatsApp"
            className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Ordina Ora su WhatsApp
          </a>
        </div>
      </section>

      {/* Chi Siamo */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Chi Siamo</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Ingredienti freschi, impasto a lunga lievitazione e passione autentica per la pizza.
          Da MANGIO, ogni fetta racconta il gusto vero di Roma.
        </p>
      </section>

      {/* Menu */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Le Nostre Pizze</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {pizzas.map((pizza, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <img src={pizza.img} alt={pizza.name} className="h-48 w-full object-cover" />
              <div className="p-5 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
                <p className="text-gray-600 text-sm mb-3 text-left w-full px-2">{pizza.ingredients}</p>
                <span className="text-green-600 font-bold mt-auto">{pizza.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galleria */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Galleria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
          {gallery.map((src, i) => (
            <img key={i} src={src} alt={`Galleria ${i + 1}`} className="rounded-2xl object-cover w-full h-64 shadow-md" />
          ))}
        </div>
      </section>

      {/* Contatti e CTA */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Contatti e Orari</h2>

        {/* Dettagli di Contatto e Orari */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Via Monte delle Capre 33G, Roma (Zona Portuense)
          </p>
          <div className="text-gray-600">
            <p>Martedì - Sabato: 10:30 - 00:00</p>
            <p>Domenica: 11:00 - 00:00</p>
            <p>Lunedì: Chiuso</p>
          </div>
        </div>

        {/* Mappa Reale */}
        <div className="max-w-3xl mx-auto mb-8 px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5944.468710113064!2d12.429978376560301!3d41.84478226749889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325f5d03cc31bc7%3A0x62b3722bef1b4dad!2sMANGIO!5e0!3m2!1sit!2sit!4v1759931077825!5m2!1sit!2sit"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64 rounded-2xl shadow-md"
          ></iframe>
        </div>

        {/* Bottone CTA */}
        <a
          href="https://wa.me/393895398409?text=Ciao!%20Vorrei%20ordinare%20una%20pizza."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-xl font-semibold py-4 px-10 rounded-full shadow-lg transition-all hover:scale-105"
        >
          Ordina Ora su WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-gray-400 text-center text-sm">
        © {new Date().getFullYear()} Pizzeria MANGIO — Tutti i diritti riservati
      </footer>
    </div>
  );
}
