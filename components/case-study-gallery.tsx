"use client"

import { RevealOnScroll } from "./reveal-on-scroll"

export interface GalleryImage {
  src: string
  alt: string
  caption: string
}

/** 4:3 portfolio cards with a one-line caption under each. */
export function CaseStudyGallery({ images }: { images: GalleryImage[] }) {
  const [hero, ...rest] = images
  return (
    <div className="space-y-6">
      <RevealOnScroll>
        <figure className="neon-card rounded-xl overflow-hidden bg-[#0a0a0a]">
          <img src={hero.src} alt={hero.alt} className="w-full h-auto block" loading="eager" />
          <figcaption className="px-5 py-4 text-sm text-white/40">{hero.caption}</figcaption>
        </figure>
      </RevealOnScroll>
      <div className="grid sm:grid-cols-2 gap-6">
        {rest.map((img) => (
          <RevealOnScroll key={img.src}>
            <figure className="neon-card rounded-xl overflow-hidden bg-[#0a0a0a] h-full">
              <img src={img.src} alt={img.alt} className="w-full h-auto block" loading="lazy" />
              <figcaption className="px-5 py-4 text-sm text-white/40">{img.caption}</figcaption>
            </figure>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}
