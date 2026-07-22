export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className="text-xl font-black tracking-wider bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
              TCG-STORE
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="#" className="px-3 py-1.5 text-sm font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 rounded-lg">
              Marketplace
            </a>
            <a href="#" className="px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors">
              Singles
            </a>
            <a href="#" className="px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors">
              Sealed Boxes
            </a>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden sm:block">
          <div className="relative">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search cards, games, sets..."
              className="w-full bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
            />
          </div>
        </div>

        {/* Right Section: Shopping Cart & Actions */}
        <div className="flex items-center gap-3">
          <button className="relative flex items-center gap-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 px-3.5 py-2 rounded-xl text-sm font-medium transition-all group">
            <div className="relative">
              <svg className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                0
              </span>
            </div>
            <span className="hidden sm:inline text-slate-300 font-semibold text-xs">$0.00</span>
          </button>
        </div>
      </div>
    </header>
  );
}
