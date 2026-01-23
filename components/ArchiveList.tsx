import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArchiveItem, Language } from '../types';
import { I18N } from '../constants';

type TabType = 'overview' | 'performance' | 'photos' | 'crew' | 'techRider';

interface ArchiveItemRowProps {
  item: ArchiveItem;
  isExpanded: boolean;
  onToggle: () => void;
  onImageClick: (src: string) => void;
  lang: Language;
}

const ArchiveItemRow = ({ item, isExpanded, onToggle, onImageClick, lang }: ArchiveItemRowProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs: { key: TabType; labelKey: string }[] = [
    { key: 'overview', labelKey: 'tab-overview' },
    { key: 'performance', labelKey: 'tab-performance' },
    { key: 'photos', labelKey: 'tab-photos' },
    { key: 'crew', labelKey: 'tab-crew' },
    { key: 'techRider', labelKey: 'tab-techrider' },
  ];

  return (
    <div className="border-b border-border">
      {/* Header Row */}
      <div 
        className="py-6 cursor-pointer cursor-hover group flex flex-col md:flex-row justify-between items-start md:items-center transition-colors duration-300 hover:text-accent"
        onClick={onToggle}
        role="button"
        aria-expanded={isExpanded}
        tabIndex={0}
      >
        {/* Left: Title */}
        <span className="text-xl md:text-2xl font-bold mb-2 md:mb-0">{item.title}</span>
        
        {/* Right: Place and Year group */}
        <div className="flex items-center text-sm md:text-lg text-gray-400 group-hover:text-accent/80 transition-colors self-end md:self-auto">
          <span className="mr-8 text-right">{item.place}</span>
          <span className="font-mono font-bold">{item.year}</span>
        </div>
      </div>

      {/* Expanded Content with Tabs */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pt-4">
              {/* Tabs Navigation */}
              <div className="flex gap-6 mb-6 border-b border-border pb-2 overflow-x-auto" role="tablist">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    role="tab"
                    aria-selected={activeTab === tab.key}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab(tab.key);
                    }}
                    className={`pb-1 text-sm md:text-base uppercase tracking-wider transition-all whitespace-nowrap cursor-hover ${
                      activeTab === tab.key 
                        ? 'text-accent border-b-2 border-accent font-bold' 
                        : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {I18N[tab.labelKey][lang]}
                  </button>
                ))}
              </div>

              {/* Tab Content Body */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-300 leading-relaxed font-light text-lg min-h-[150px]"
              >
                {activeTab === 'overview' && <p>{item.content.overview}</p>}
                
                {activeTab === 'performance' && <p>{item.content.performance}</p>}
                
                {activeTab === 'crew' && <p className="whitespace-pre-line">{item.content.crew}</p>}

                {activeTab === 'photos' && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {item.content.photos.map((photo, idx) => (
                      <div 
                        key={idx} 
                        className="overflow-hidden rounded-sm cursor-zoom-in cursor-hover"
                        onClick={() => onImageClick(photo)}
                      >
                        <img 
                          src={photo} 
                          alt={`${item.title} photo ${idx + 1}`} 
                          className="w-full h-40 object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500" 
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'techRider' && (
                   <div className="bg-neutral-900 p-6 rounded border border-neutral-800 font-mono text-sm text-green-400">
                     {item.content.techRider}
                   </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ArchiveListProps {
  items: ArchiveItem[];
  lang: Language;
}

const ArchiveList = ({ items, lang }: ArchiveListProps) => {
  // Track which item is expanded
  const [expandedId, setExpandedId] = useState<string | null>(null);
  // Lightbox state
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <div className="border-t border-border mt-10">
        {items.map((item) => (
          <ArchiveItemRow 
            key={item.id} 
            item={item} 
            isExpanded={expandedId === item.id} 
            onToggle={() => toggleItem(item.id)}
            onImageClick={(imgSrc) => setLightboxImg(imgSrc)}
            lang={lang}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex justify-center items-center p-4 cursor-pointer"
            onClick={() => setLightboxImg(null)}
          >
             <div className="relative max-w-full max-h-full">
                <img 
                  src={lightboxImg} 
                  alt="Fullsize preview" 
                  className="max-w-full max-h-[90vh] object-contain select-none"
                />
                <button className="absolute top-4 right-4 text-white text-sm uppercase bg-black/50 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors cursor-hover">
                   Close
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ArchiveList;