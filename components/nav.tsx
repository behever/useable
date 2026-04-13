export function Nav() {
  return (
    <nav className="flex justify-between items-center px-6 py-8 md:px-16 relative z-10">
      <div className="font-bold text-base tracking-tight text-[#1a1a1a]">
        Useable Studio
      </div>
      <ul className="flex gap-4 md:gap-8 list-none">
        <li>
          <a
            href="#products"
            className="text-[#666] text-sm font-medium hover:text-[#1a1a1a] transition-colors min-h-[44px] min-w-[44px] inline-flex items-center"
          >
            Products
          </a>
        </li>
      </ul>
    </nav>
  );
}
