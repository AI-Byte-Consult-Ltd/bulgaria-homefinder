import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  validateTourUrl,
  detectTourProvider,
  getEmbedUrl,
  isSafeToEmbed,
  type VirtualTourProvider,
} from '@/lib/virtualTour';
import { Box, ExternalLink, Play, X } from 'lucide-react';

// ─── i18n labels ────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  virtualTour:   { en: 'Virtual Tour',      ru: 'Виртуальный тур',      bg: 'Виртуален тур',     de: 'Virtueller Rundgang',   it: 'Tour Virtuale'      },
  openTour:      { en: 'Open Virtual Tour',  ru: 'Открыть тур',          bg: 'Отвори тура',       de: 'Tour öffnen',           it: 'Apri il Tour'       },
  openNewTab:    { en: 'Open in New Tab',    ru: 'Открыть в новой вкладке', bg: 'Отвори в нов раздел', de: 'In neuem Tab öffnen', it: 'Apri in nuova scheda' },
  vrTour:        { en: '3D Tour',            ru: '3D тур',               bg: '3D тур',            de: '3D-Tour',               it: 'Tour 3D'            },
  loadingTour:   { en: 'Loading tour…',      ru: 'Загрузка тура…',       bg: 'Зареждане…',        de: 'Wird geladen…',         it: 'Caricamento…'       },
  embedBlocked:  { en: 'This tour cannot be embedded. Open it in a new tab instead.',
                   ru: 'Этот тур невозможно встроить. Откройте в новой вкладке.',
                   bg: 'Този тур не може да бъде вграден. Отворете в нов раздел.',
                   de: 'Dieser Rundgang kann nicht eingebettet werden. Öffnen Sie ihn in einem neuen Tab.',
                   it: 'Questo tour non può essere incorporato. Aprilo in una nuova scheda.' },
};

const lbl = (key: string, lang: string) => LABELS[key]?.[lang] ?? LABELS[key]?.['en'] ?? key;

// ─── Badge component for listing cards ──────────────────────────────────────

interface VirtualTourBadgeProps {
  className?: string;
}

export const VirtualTourBadge = ({ className = '' }: VirtualTourBadgeProps) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];

  return (
    <span
      className={`inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded-full ${className}`}
    >
      <Box className="h-3 w-3" />
      {lbl('vrTour', lang)}
    </span>
  );
};

// ─── Inline section for property detail page ────────────────────────────────

interface VirtualTourSectionProps {
  virtualTourUrl: string | null | undefined;
  virtualTourType?: VirtualTourProvider | null;
  propertyTitle?: string;
}

export const VirtualTourSection = ({
  virtualTourUrl,
  virtualTourType,
  propertyTitle,
}: VirtualTourSectionProps) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];

  const safeUrl = validateTourUrl(virtualTourUrl);
  if (!safeUrl) return null;

  const provider = virtualTourType ?? detectTourProvider(safeUrl);
  const embedUrl = provider ? getEmbedUrl(safeUrl, provider) : null;
  const canEmbed = embedUrl && isSafeToEmbed(embedUrl);

  const [showEmbed, setShowEmbed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Box className="h-5 w-5 text-primary" />
        {lbl('virtualTour', lang)}
      </h2>

      {/* Preview / activate area */}
      {!showEmbed ? (
        <div className="relative rounded-xl border-2 border-dashed border-primary/20 bg-muted/30 flex flex-col items-center justify-center py-16 gap-4">
          <div className="p-4 rounded-full bg-primary/10">
            <Box className="h-10 w-10 text-primary" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            {canEmbed ? (
              <>
                <Button onClick={() => setShowEmbed(true)} className="gap-2">
                  <Play className="h-4 w-4" />
                  {lbl('openTour', lang)}
                </Button>
                <Button variant="outline" onClick={() => setShowModal(true)} className="gap-2">
                  <Box className="h-4 w-4" />
                  Fullscreen
                </Button>
              </>
            ) : (
              <>
                <p className="text-sm text-muted-foreground text-center max-w-md px-4">
                  {lbl('embedBlocked', lang)}
                </p>
                <a href={safeUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    {lbl('openNewTab', lang)}
                  </Button>
                </a>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-black">
            {canEmbed && (
              <iframe
                src={embedUrl!}
                title={propertyTitle ? `${lbl('virtualTour', lang)} — ${propertyTitle}` : lbl('virtualTour', lang)}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            )}
          </div>

          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => setShowEmbed(false)}>
              <X className="h-4 w-4 mr-1" />
              Close
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowModal(true)}>
                Fullscreen
              </Button>
              <a href={safeUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ExternalLink className="h-3.5 w-3.5" />
                  {lbl('openNewTab', lang)}
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen modal */}
      {canEmbed && (
        <VirtualTourModal
          open={showModal}
          onClose={() => setShowModal(false)}
          embedUrl={embedUrl!}
          title={propertyTitle}
        />
      )}
    </div>
  );
};

// ─── Button for gallery area ────────────────────────────────────────────────

interface VirtualTourButtonProps {
  virtualTourUrl: string | null | undefined;
  virtualTourType?: VirtualTourProvider | null;
  propertyTitle?: string;
}

export const VirtualTourButton = ({
  virtualTourUrl,
  virtualTourType,
  propertyTitle,
}: VirtualTourButtonProps) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];

  const safeUrl = validateTourUrl(virtualTourUrl);
  if (!safeUrl) return null;

  const provider = virtualTourType ?? detectTourProvider(safeUrl);
  const embedUrl = provider ? getEmbedUrl(safeUrl, provider) : null;
  const canEmbed = embedUrl && isSafeToEmbed(embedUrl);

  const [showModal, setShowModal] = useState(false);

  const handleClick = useCallback(() => {
    if (canEmbed) {
      setShowModal(true);
    } else {
      window.open(safeUrl, '_blank', 'noopener,noreferrer');
    }
  }, [canEmbed, safeUrl]);

  return (
    <>
      <Button onClick={handleClick} variant="outline" className="gap-2">
        <Box className="h-4 w-4" />
        {lbl('openTour', lang)}
      </Button>

      {canEmbed && (
        <VirtualTourModal
          open={showModal}
          onClose={() => setShowModal(false)}
          embedUrl={embedUrl!}
          title={propertyTitle}
        />
      )}
    </>
  );
};

// ─── Modal ──────────────────────────────────────────────────────────────────

interface VirtualTourModalProps {
  open: boolean;
  onClose: () => void;
  embedUrl: string;
  title?: string;
}

const VirtualTourModal = ({ open, onClose, embedUrl, title }: VirtualTourModalProps) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-[95vw] w-full max-h-[95vh] p-0 gap-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="flex items-center gap-2">
            <Box className="h-5 w-5 text-primary" />
            {title ? `${lbl('virtualTour', lang)} — ${title}` : lbl('virtualTour', lang)}
          </DialogTitle>
        </DialogHeader>

        <div className="relative w-full aspect-video">
          <iframe
            src={embedUrl}
            title={title ?? lbl('virtualTour', lang)}
            className="absolute inset-0 w-full h-full rounded-b-lg"
            allowFullScreen
            allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
