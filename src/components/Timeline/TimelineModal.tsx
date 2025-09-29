import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, MapPin, Building, Calendar } from 'lucide-react';
import type { TimelineItem } from '@/types/portfolio';

interface TimelineModalProps {
  item: TimelineItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TimelineModal = ({ item, isOpen, onClose }: TimelineModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-card border border-border rounded-2xl shadow-elegant z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex-shrink-0 p-6 border-b border-border">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                        {item.year}
                      </div>
                      {item.company && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{item.company}</span>
                        </div>
                      )}
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {item.title}
                    </h2>
                    
                    {item.role && item.role !== item.title && (
                      <p className="text-lg text-muted-foreground mb-2">{item.role}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      {item.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-auto p-6">
                {/* Details */}
                <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
                  <div className="whitespace-pre-line text-foreground leading-relaxed">
                    {item.details}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                {item.link && (
                  <div className="flex justify-center">
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent-glow transition-colors shadow-card hover:shadow-glow"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Project
                    </motion.a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};