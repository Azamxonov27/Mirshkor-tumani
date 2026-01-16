
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass-morphism border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">M</div>
            <span className="font-bold text-xl text-gray-800">Mirishkor.uz</span>
          </div>
          <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <li><a href="#about" className="hover:text-blue-600 transition">Haqida</a></li>
            <li><a href="#economy" className="hover:text-blue-600 transition">Iqtisodiyot</a></li>
            <li><a href="#landmarks" className="hover:text-blue-600 transition">Yodgorliklar</a></li>
            <li><a href="#people" className="hover:text-blue-600 transition">Mashhurlar</a></li>
          </ul>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
            Bog'lanish
          </button>
        </nav>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mirishkor Tumani</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Qashqadaryo viloyati, Mirishkor tumani hokimligi rasmiy axborot portali. 
                Xalq bilan muloqot va ochiqlik ustuvor vazifamizdir.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tezkor havolalar</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Hokimiyat qarorlari</a></li>
                <li><a href="#" className="hover:text-white transition">Interaktiv xizmatlar</a></li>
                <li><a href="#" className="hover:text-white transition">Vakansiyalar</a></li>
                <li><a href="#" className="hover:text-white transition">Murojaat yuborish</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Aloqa</h4>
              <p className="text-sm text-gray-400 mb-2">Manzil: Mirishkor tumani, Yangi Mirishkor qo'rg'oni</p>
              <p className="text-sm text-gray-400 mb-2">Tel: +998 (75) 472-12-34</p>
              <p className="text-sm text-gray-400">Email: info@mirishkor.uz</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Mirishkor Tumani Hokimligi. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
