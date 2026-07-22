// src/app/page.tsx

import db from "./lib/db";
import Header from "@/components/Header";


interface Card {
  id: number;
  name: string;
  game: string;
  price: number;
  stock: number;
  imageUrl: string;
}

export default function Home() {
  // Fetch cards directly from the SQLite database
  const cards = db.prepare('SELECT * FROM cards').all() as Card[];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      {/* Header */}
      <Header />

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-slate-200">Featured Marketplace Inventory</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between">
              <div>
                <div className="h-48 bg-slate-700 relative overflow-hidden">
                  {/* Fallback image container */}
                  <img src={card.imageUrl} alt={card.name} className="object-cover w-full h-full" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                    {card.game}
                  </span>
                  <h3 className="text-lg font-bold mt-2 text-white">{card.name}</h3>
                  <p className="text-xl font-extrabold text-emerald-400 mt-2">${card.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
                  <span>Stock available:</span>
                  <span className="font-semibold text-slate-200">{card.stock}</span>
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}