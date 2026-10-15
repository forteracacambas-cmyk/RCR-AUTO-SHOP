import React from 'react';
import engine from '../../engine-hero.webp';
import detail from '../../engine-detail.webp';
import inspection from '../../engine-inspection.webp';
import shipping from '../../engine-shipping.webp';

const images = {
  engine: {src: engine, alt: 'Motor automotivo completo'},
  detail: {src: detail, alt: 'Cilindros e pistões de motor'},
  inspection: {src: inspection, alt: 'Conferência técnica de motor automotivo'},
  shipping: {src: shipping, alt: 'Motor automotivo pronto para transporte'},
};
export const SectionImage = ({image, caption, compact = false}: {image: keyof typeof images; caption?: string; compact?: boolean}) => (
  <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-sm">
    <img src={images[image].src} alt={images[image].alt} width="1200" height="800" loading="lazy" decoding="async" className={`w-full object-cover ${compact ? 'aspect-[16/9]' : 'aspect-[3/2]'}`} />
    {caption && <figcaption className="px-4 py-2.5 text-xs leading-relaxed text-neutral-300">{caption}</figcaption>}
  </figure>
);
