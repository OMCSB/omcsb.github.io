import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Building } from 'lucide-react';
import type { TimelineItem as TimelineItemType } from '@/types/portfolio';

interface TimelineItemProps {
  item: TimelineItemType;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  isRight?: boolean;
  isMobile?: boolean;
}

export const TimelineItem = ({ 
  item, 
  onClick, 
  onKeyDown, 
  isRight = false, 
  isMobile = false 
}: TimelineItemProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -4
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={false}
      className={`timeline-node group cursor-pointer ${
        isRight ? 'text-right' : 'text-left'
      } ${isMobile ? 'w-full' : ''}`}
    >
      {/* Header */}
      <div className={`mb-4 ${isRight ? 'text-right' : 'text-left'}`}>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
          {item.title}
        </h3>
        
        {item.company && (
          <div className={`flex items-center gap-2 text-muted-foreground mb-1 ${
            isRight ? 'justify-end' : 'justify-start'
          }`}>
            <Building className="w-4 h-4" />
            <span className="font-medium">{item.company}</span>
          </div>
        )}
        
        {item.location && (
          <div className={`flex items-center gap-2 text-muted-foreground ${
            isRight ? 'justify-end' : 'justify-start'
          }`}>
            <MapPin className="w-4 h-4" />
            <span>{item.location}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {item.excerpt}
        </p>

        {/* Tech Stack */}
        <div className={`flex flex-wrap gap-2 ${
          isRight ? 'justify-end' : 'justify-start'
        }`}>
          {item.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20"
            >
              {tech}
            </span>
          ))}
          {item.tech.length > 5 && (
            <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
              +{item.tech.length - 5} more
            </span>
          )}
        </div>

        {/* Link */}
        {item.link && (
          <div className={`flex items-center gap-2 text-accent hover:text-accent-glow transition-colors ${
            isRight ? 'justify-end' : 'justify-start'
          }`}>
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm font-medium">View Project</span>
          </div>
        )}
      </div>

      {/* Expand Hint */}
      <div className={`mt-4 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ${
        isRight ? 'text-right' : 'text-left'
      }`}>
        Click for details
      </div>
    </motion.div>
  );
};