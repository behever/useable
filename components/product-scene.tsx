import Image from "next/image";
import type { ProductSlug } from "@/lib/products";

export function ProductPhone({
  product,
  screen = "schedule",
  priority = false,
}: {
  product: ProductSlug;
  screen?: "dashboard" | "schedule";
  priority?: boolean;
}) {
  return (
    <div className={`product-phone product-phone--${product}`}>
      <Image
        src={`/images/studio/${product}-${screen}.webp`}
        width={720}
        height={1564}
        alt={`${product === "grassr" ? "Grassr" : "Cleanr"} ${screen === "schedule" ? "schedule with the day’s jobs and route" : "dashboard with upcoming work"}`}
        sizes="(max-width: 700px) 45vw, (max-width: 1100px) 24vw, 320px"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        unoptimized
      />
    </div>
  );
}

export function ProductScene({
  product,
  index,
  priority = false,
  screen = "schedule",
}: {
  product: ProductSlug;
  index?: number;
  priority?: boolean;
  screen?: "dashboard" | "schedule";
}) {
  return (
    <div className={`product-scene product-scene--${product}`}>
      <Image
        className="product-scene-background"
        src={`/images/studio/${product}-background.webp`}
        alt=""
        fill
        sizes="(max-width: 700px) 100vw, 50vw"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        unoptimized
      />
      {index !== undefined ? (
        <span className="scene-index" aria-hidden="true">
          0{index + 1}
        </span>
      ) : null}
      <span className="scene-wordmark" aria-hidden="true">
        {product}
      </span>
      <div className="scene-device">
        <ProductPhone product={product} screen={screen} priority={priority} />
      </div>
    </div>
  );
}
