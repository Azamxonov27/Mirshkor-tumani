
import React, { useState } from 'react';
import Layout from './components/Layout';
import { MIRISHKOR_INFO, DISTRICT_STATS, LANDMARKS, FAMOUS_PEOPLE } from './constants';
import { askMirishkorBot } from './services/geminiService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const App: React.FC = () => {
  const [chatQuery, setChatQuery] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatQuery.trim()) return;
    
    setIsLoading(true);
    const res = await askMirishkorBot(chatQuery);
    setChatResponse(res);
    setIsLoading(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <img 
          src="https://picsum.photos/seed/mirishkor_landscape/1920/1080" 
          alt="Mirishkor" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Mirishkor Tumani</h1>
          <p className="text-xl md:text-2xl mb-8 font-light italic">"Mehnat va baraka maskani"</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#about" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">Tanishish</a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">Murojaat</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {DISTRICT_STATS.map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition">
                <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-gray-500 font-medium uppercase tracking-wider text-xs">{stat.label} ({stat.unit})</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/mirishkor_map/800/600" 
                  alt="Geografiya" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <p className="text-sm font-semibold">Tashkil etilgan:</p>
                  <p className="text-2xl font-bold">{MIRISHKOR_INFO.established}</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Geografik joylashuvi va Tarixi</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {MIRISHKOR_INFO.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Iqlimi</h4>
                    <p className="text-gray-500">Keskin kontinental, asosan qishloq xo'jaligiga mos.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Resurslar</h4>
                    <p className="text-gray-500">Paxta, g'alla va tabiiy yaylovlar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economy Section with Charts */}
      <section id="economy" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Iqtisodiy Ko'rsatkichlar</h2>
            <p className="text-gray-500 max-w-2xl mx-auto italic">Tuman iqtisodiyotining asosini qishloq xo'jaligi mahsulotlari yetishtirish tashkil etadi.</p>
          </div>
          
          <div className="h-[400px] w-full mb-12">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DISTRICT_STATS}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {DISTRICT_STATS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Paxtachilik</h3>
              <p className="text-blue-700/80">Tumandagi sug'oriladigan yerlarning katta qismi "oq oltin" yetishtirishga yo'naltirilgan.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold mb-4 text-green-800">Chorvachilik</h3>
              <p className="text-green-700/80">Pomuq va boshqa hududlarda qoramol va qo'y-echki boqish rivojlangan.</p>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
              <h3 className="text-xl font-bold mb-4 text-amber-800">Sanoat</h3>
              <p className="text-amber-700/80">Kichik biznes va tadbirkorlik subyektlari soni yildan-yilga oshib bormoqda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Landmarks Section */}
      <section id="landmarks" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Tarixiy va Diqqatga Sazovor Joylar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {LANDMARKS.map(landmark => (
              <div key={landmark.id} className="group relative overflow-hidden rounded-2xl">
                <img 
                  src={landmark.image} 
                  alt={landmark.title} 
                  className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold mb-2">{landmark.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                    {landmark.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Famous People Section */}
      <section id="people" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Mashhur Shaxslar</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {FAMOUS_PEOPLE.map(person => (
              <div key={person.id} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-8 bg-gray-50 rounded-3xl">
                <img src={person.image} alt={person.name} className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-800">{person.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{person.role}</p>
                  <p className="text-gray-500 text-sm italic">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive AI Bot Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Mirishkor haqida savolingiz bormi?</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleChat} className="flex flex-col sm:flex-row gap-4 mb-8">
              <input 
                type="text" 
                value={chatQuery}
                onChange={(e) => setChatQuery(e.target.value)}
                placeholder="Masalan: Tuman aholisi qancha?..." 
                className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition disabled:opacity-50"
              >
                {isLoading ? 'Oylamoqda...' : 'So\'rash'}
              </button>
            </form>
            
            {chatResponse && (
              <div className="bg-white/10 p-8 rounded-3xl text-left animate-fade-in border border-white/10">
                <p className="text-lg leading-relaxed">{chatResponse}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Administration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Tuman Ma'muriyati</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Mirishkor tumani hokimligi fuqarolar uchun ochiq eshiklar siyosatini yuritadi. 
                  Siz o'z taklif va shikoyatlaringiz bilan bevosita murojaat qilishingiz mumkin.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">📍</div>
                    <span className="text-gray-700">Yangi Mirishkor, Hokimiyat binosi</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">📞</div>
                    <span className="text-gray-700">+998 (75) 472-12-34</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
                {/* Visual representation of a map or building */}
                <img src="https://picsum.photos/seed/admin/800/600" className="w-full h-full object-cover opacity-80" alt="Hokimiyat" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-6 py-2 rounded-full font-bold text-blue-600 shadow-lg cursor-pointer hover:bg-blue-600 hover:text-white transition">Xaritada ko'rish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
