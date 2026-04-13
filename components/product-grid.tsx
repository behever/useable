import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Grassr",
    description: "Lawn care management for crews and solo operators",
    status: "Live" as const,
    href: "https://grassr.app",
    redacted: false,
  },
  {
    name: "Upcoming Product",
    description: "A new tool for service businesses",
    status: "Building" as const,
    redacted: true,
  },
  {
    name: "Upcoming Product",
    description: "More tools for service businesses",
    status: "Coming Soon" as const,
    redacted: true,
  },
];

const statusStyles = {
  Live: "bg-[#ecfdf5] text-[#059669]",
  Building: "bg-[#fffbeb] text-[#d97706]",
  "Coming Soon": "bg-[#eef2ff] text-[#6366f1]",
};

export function ProductGrid() {
  return (
    <section
      id="products"
      className="px-6 md:px-16 max-w-[1200px] mx-auto relative pb-16 md:pb-24"
    >
      <div className="text-xs uppercase tracking-[0.12em] text-[#999] font-semibold mb-8">
        Products
      </div>
      <div className="flex flex-col">
        {products.map((product, i) => {
          const isLast = i === products.length - 1;

          if (product.redacted) {
            return (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[200px_1fr_auto] items-center py-6 border-t border-[#e5e5e5] gap-2 md:gap-8 opacity-70 ${isLast ? "border-b" : ""}`}
                aria-hidden="true"
              >
                <div className="text-lg font-semibold tracking-[-0.01em] redacted-text text-[#d0d0d0]">
                  {product.name}
                </div>
                <div className="text-sm text-[#888] redacted-text">
                  {product.description}
                </div>
                <span
                  className={`text-[0.7rem] uppercase tracking-[0.06em] font-semibold px-3 py-1 rounded-full whitespace-nowrap w-fit ${statusStyles[product.status]}`}
                >
                  {product.status}
                </span>
              </div>
            );
          }

          return (
            <a
              key={i}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group grid grid-cols-1 md:grid-cols-[200px_1fr_auto] items-center py-6 border-t border-[#e5e5e5] gap-2 md:gap-8 transition-colors hover:bg-black/[0.02] rounded-lg focus-visible:outline-2 focus-visible:outline-[#4A5568] focus-visible:outline-offset-2 ${isLast ? "border-b" : ""}`}
            >
              <div className="text-lg font-semibold tracking-[-0.01em] flex items-center gap-2">
                {product.name}
                <ArrowUpRight className="w-4 h-4 text-[#999] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm text-[#888]">{product.description}</div>
              <span
                className={`text-[0.7rem] uppercase tracking-[0.06em] font-semibold px-3 py-1 rounded-full whitespace-nowrap w-fit ${statusStyles[product.status]}`}
              >
                {product.status}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
