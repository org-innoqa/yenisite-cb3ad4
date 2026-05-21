import React from 'react';
import { MapPin, Phone, Mail, Home, Building2 } from 'lucide-react';

const listings = [
  { id: 1, title: 'Modern Şehir Dairesi', price: '4.500.000 TL', type: 'Satılık', location: 'Kadıköy, İstanbul', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Lüks Ofis Katı', price: '25.000 TL', type: 'Kiralık', location: 'Levent, İstanbul', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Deniz Manzaralı Villa', price: '12.000.000 TL', type: 'Satılık', location: 'Bodrum, Muğla', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80' }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">PRESTİJ EMLAK</h1>
          <div className="space-x-6 text-gray-600">
            <a href="#ilanlar" className="hover:text-blue-900">İlanlar</a>
            <a href="#iletisim" className="hover:text-blue-900">İletişim</a>
          </div>
        </div>
      </nav>

      <header className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Hayalinizdeki Mülkü Bulun</h2>
        <p className="text-xl opacity-90">Güvenilir, şeffaf ve profesyonel emlak danışmanlığı.</p>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h3 id="ilanlar" className="text-2xl font-bold mb-8 text-gray-800">Güncel İlanlarımız</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {listings.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-xs font-bold text-blue-600 uppercase">{item.type}</span>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-gray-500 flex items-center gap-1 mt-2"><MapPin size={16} /> {item.location}</p>
                <p className="text-xl font-bold text-blue-900 mt-4">{item.price}</p>
                <button className="w-full mt-4 bg-blue-900 text-white py-2 rounded hover:bg-blue-800">Detayları İncele</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer id="iletisim" className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">İletişim Bilgileri</h4>
            <p className="flex items-center gap-2 mb-2"><Phone size={20} /> +90 (212) 000 00 00</p>
            <p className="flex items-center gap-2"><Mail size={20} /> info@prestijemlak.com</p>
          </div>
          <div className="h-40 bg-gray-800 rounded flex items-center justify-center text-gray-500">
            Harita Konumu Buraya Gelecek
          </div>
        </div>
      </footer>
    </div>
  );
}