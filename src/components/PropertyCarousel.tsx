import { useState, useCallback, useEffect, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
interface PropertyCarouselProps {
  children: ReactNode;
  className?: string;
}
/**
 * Premium carousel with dot pagination, hover arrows, and smooth touch swiping.
 * Responsive: 1 card on mobile, 2 on tablet, 3 on desktop.
 */
export const PropertyCarousel = ({ children, className }: PropertyCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: false,
    containScroll: 'trimSnaps',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);
  return (
    <div
      className={cn('relative group/carousel', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex -ml-4">
          {children}
        </div>
      </div>
      {/* Arrow – Previous */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous"
        className={cn(
          'absolute top-1/2 -translate-y-1/2 left-2 z-10',
          'h-10 w-10 rounded-full flex items-center justify-center',
          'bg-background/80 backdrop-blur-sm border border-border shadow-lg',
          'text-foreground hover:bg-background hover:scale-105',
          'transition-all duration-300 ease-out',
          'disabled:opacity-0 disabled:pointer-events-none',
          // Desktop: show on hover; Mobile: always subtly visible
          'md:opacity-0 md:group-hover/carousel:opacity-100',
          'opacity-60 active:scale-95',
        )}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      {/* Arrow – Next */}
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next"
        className={cn(
          'absolute top-1/2 -translate-y-1/2 right-2 z-10',
          'h-10 w-10 rounded-full flex items-center justify-center',
          'bg-background/80 backdrop-blur-sm border border-border shadow-lg',
          'text-foreground hover:bg-background hover:scale-105',
          'transition-all duration-300 ease-out',
          'disabled:opacity-0 disabled:pointer-events-none',
          'md:opacity-0 md:group-hover/carousel:opacity-100',
          'opacity-60 active:scale-95',
        )}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      {/* Dot Pagination */}
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                'rounded-full transition-all duration-300 ease-out',
                index === selectedIndex
                  ? 'w-6 h-2 bg-primary'
                  : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50',
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};
/** Carousel slide wrapper — responsive widths built in */
export const PropertyCarouselItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      'min-w-0 shrink-0 grow-0 pl-4',
      'basis-[85%] sm:basis-1/2 lg:basis-1/3',
      className,
    )}
  >
    {children}
  </div>
);
