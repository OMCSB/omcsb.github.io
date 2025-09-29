import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TimelineItem } from './Timeline/TimelineItem';
import { TimelineModal } from './Timeline/TimelineModal';
import { timelineData } from '@/data/timeline';
import type { TimelineItem as TimelineItemType } from '@/types/portfolio';

export const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItemType | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressHeight = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openModal = (item: TimelineItemType) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent, item: TimelineItemType) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal(item);
    }
  };

  if (isMobile) {
    return (
      <section id="timeline" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Career Timeline</h2>
          </motion.div>

          {/* Mobile Horizontal Timeline */}
          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-4">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-80 snap-start"
                >
                  <TimelineItem
                    item={item}
                    onClick={() => openModal(item)}
                    onKeyDown={(e) => handleKeyDown(e, item)}
                    isMobile={true}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Mobile Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {timelineData.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30"
                />
              ))}
            </div>
          </div>
        </div>

        <TimelineModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={closeModal}
        />
      </section>
    );
  }

  return (
    <section id="timeline" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Career Timeline</h2>
        </motion.div>

        {/* Desktop Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto" role="list">
          {/* Timeline Rail */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-rail">
            <motion.div
              className="w-full bg-timeline-progress origin-top"
              style={{ height: progressHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                role="listitem"
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <TimelineItem
                    item={item}
                    onClick={() => openModal(item)}
                    onKeyDown={(e) => handleKeyDown(e, item)}
                    isRight={index % 2 !== 0}
                  />
                </div>

                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-timeline-active rounded-full border-4 border-background shadow-glow z-10"
                />

                {/* Year Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 px-3 py-1 bg-timeline-active text-white text-sm font-semibold rounded-full"
                >
                  {item.year}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <TimelineModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={closeModal}
      />
    </section>
  );
};