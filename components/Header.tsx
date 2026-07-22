export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
      <h1 className="text-2xl font-black tracking-wider text-emerald-400">TCG-SKELETON</h1>
      <div className="flex gap-4 items-center">
        <span className="text-sm bg-slate-800 px-3 py-1 rounded-full text-slate-300">Cart: 0 items</span>
      </div>
    </header>
  );
}
