export function Footer() {
  return (
    <footer className="px-6 md:px-16 py-12 max-w-[1200px] mx-auto border-t border-[#e5e5e5] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-sm text-[#bbb]">
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        <a
          href="https://grassr.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#999] font-medium hover:text-[#555] transition-colors min-h-[44px] inline-flex items-center"
        >
          Grassr
        </a>
        <a
          href="https://trycleanr.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#999] font-medium hover:text-[#555] transition-colors min-h-[44px] inline-flex items-center"
        >
          Cleanr
        </a>
        <a
          href="/privacy"
          className="text-[#999] font-medium hover:text-[#555] transition-colors min-h-[44px] inline-flex items-center"
        >
          Privacy
        </a>
      </div>
      <div>&copy; 2026 Useable Studio</div>
    </footer>
  );
}
