export function Footer() {
  return (
    <footer className="px-6 md:px-16 py-12 max-w-[1200px] mx-auto border-t border-[#e5e5e5] flex justify-between items-end text-sm text-[#bbb]">
      <div className="flex gap-6">
        <a
          href="https://grassr.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#999] font-medium hover:text-[#555] transition-colors min-h-[44px] inline-flex items-center"
        >
          Grassr
        </a>
      </div>
      <div>&copy; 2026 Useable Studio</div>
    </footer>
  );
}
