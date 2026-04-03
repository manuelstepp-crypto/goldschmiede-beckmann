"use client";

import Image from "next/image";
import { useState } from "react";

interface JewelryItem {
  src: string;
  name: string;
}

interface JewelryGalleryProps {
  items: JewelryItem[];
}

export function JewelryGallery({ items }: JewelryGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <button
            key={item.src}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-warm-gray cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-sm text-gold font-serif">{item.name}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-gold hover:text-gold-light text-3xl"
            onClick={() => setSelectedIndex(null)}
          >
            &times;
          </button>

          {/* Previous */}
          {selectedIndex > 0 && (
            <button
              className="absolute left-4 md:left-8 text-gold hover:text-gold-light text-4xl"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              &#8249;
            </button>
          )}

          {/* Next */}
          {selectedIndex < items.length - 1 && (
            <button
              className="absolute right-4 md:right-8 text-gold hover:text-gold-light text-4xl"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex + 1);
              }}
            >
              &#8250;
            </button>
          )}

          <div
            className="relative max-w-4xl max-h-[80vh] w-full aspect-square"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[selectedIndex].src}
              alt={items[selectedIndex].name}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <p className="absolute -bottom-10 left-0 right-0 text-center text-gold font-serif text-lg">
              {items[selectedIndex].name}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
