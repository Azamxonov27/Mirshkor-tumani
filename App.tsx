import React from 'react';
import { MapPin, Users, Wheat, Landmark, History, Phone, Mail } from 'lucide-react';

export default function NarpayEnsiklopediya() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. Navigatsiya */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-100">
        <div className="text-2xl font-black text-blue-700 tracking-tighter">NARPAY.UZ</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600">Tarix</a>
          <a href="#" className="hover:text-blue-600">Ma'muriyat</a>
          <a href="#" className="hover:text-blue-600">Iqtisodiyot</a>
          <a href="#" className="hover:text-blue-600">Shaxslar</a>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold">Murojaat</button>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative py-20 px-8 text-center bg-slate-50 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Narpay tumani <br/> <span className="text-blue-600">raqamli ensiklopediyasi</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Zarafshon vohasining durdonasi, qadimiy tarix va zamonaviy iqtisodiyot tutashgan manzil.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-3">
              <Users className="text-blue-500" />
              <span className="font-bold">220,000+ aholi</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-3">
              <MapPin className="text-green-500" />
              <span className="font-bold">Oqtosh shahri</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bo'limlar */}
      <section className="py-20 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-[2.5rem] bg-blue-600 text-white space-y-4">
          <Landmark size={40} />
          <h3 className="text-2xl font-bold">Ma'muriyat</h3>
          <p className="opacity-80">Tuman hokimiyati tizimi, rahbarlar va davlat xizmatlari haqida barcha ma'lumotlar.</p>
        </div>

        <div className="p-8 rounded-[2.5rem] bg-slate-100 space-y-4">
          <Wheat size={40} className="text-amber-600" />
          <h3 className="text-2xl font-bold">Iqtisodiyot</h3>
          <p className="text-slate-600">Qishloq xo'jaligi, g'allachilik va tumandagi yirik sanoat korxonalari ko'rsatkichlari.</p>
        </div>

        <div className="p-8 rounded-[2.5rem] bg-slate-100 space-y-4">
          <History size={40} className="text-purple-600" />
          <h3 className="text-2xl font-bold">Tarix</h3>
          <p className="text-slate-600">Narpay kanalining yaratilishi va qadimiy Oqtosh qal'asi haqida ensiklopedik faktlar.</p>
        </div>
      </section>

      {/* 4. Aloqa (Footer o'rnida) */}
      <footer className="bg-slate-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Narpay tumani hokimiyati</h2>
            <p className="text-slate-400">Samarqand viloyati, Oqtosh shahri, Mustaqillik ko'chasi.</p>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-blue-400" />
              <span>(66) 443-12-34</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-blue-400" />
              <span>info@narpay.uz</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}