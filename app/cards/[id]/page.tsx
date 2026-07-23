// app/cards/[id]/page.tsx

import db from "@/app/lib/db";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Card {
  id: number;
  name: string;
  game: string;
  price: number;
  stock: number;
  imageUrl: string;
}

interface CardDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CardDetailPage({ params }: CardDetailPageProps) {
  const resolvedParams = await params;
  const cardId = parseInt(resolvedParams.id, 10);

  if (isNaN(cardId)) {
    notFound();
  }

  const card = db.prepare("SELECT * FROM cards WHERE id = ?").get(cardId) as Card | undefined;

  if (!card) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Header />

      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 mb-6 transition-colors"
        >
          ← Back to Inventory
        </Link>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-80 md:h-full bg-slate-700 relative overflow-hidden flex items-center justify-center">
            <img
              src={card.imageUrl}
              alt={card.name}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800/50">
                {card.game}
              </span>
              <h1 className="text-3xl font-extrabold mt-4 text-white">{card.name}</h1>
              <p className="text-3xl font-black text-emerald-400 mt-4">${card.price.toFixed(2)}</p>

              <div className="mt-6 pt-6 border-t border-slate-700 space-y-3">
                <div className="flex justify-between items-center text-sm text-slate-300">
                  <span>Card ID:</span>
                  <span className="font-semibold font-mono text-slate-400">#{card.id}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-slate-300">
                  <span>Availability:</span>
                  <span className={`font-semibold ${card.stock > 0 ? "text-emerald-400" : "text-red-400"}`}>
                    {card.stock > 0 ? `${card.stock} in stock` : "Out of stock"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-emerald-900/40">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
