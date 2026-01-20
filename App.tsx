import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import ArchiveList from './components/ArchiveList';
import { I18N, TEAM_MEMBERS, TEAM_DESC, ACTIVITIES, ACTIVITY_DESC, ARCHIVES, PRESS } from './constants';
import { Language, SectionType, TeamMember, Activity } from './types';

// [중요] main-bg.jpg 파일을 이 파일(App.tsx)과 같은 폴더(루트)에 놓아주세요.
// 파일을 import 방식으로 불러오면 경로 문제와 캐싱 문제를 해결할 수 있습니다.
import mainBg from './main-bg.jpg';

function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [currentSection, setCurrentSection] = useState<SectionType>('main');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeActivity, setActiveActivity] = useState<Activity | null>(null);

  // Team Expander Logic
  const [activeTeamRow, setActiveTeamRow] = useState<number | null>(null);
  const [activeTeamMember, setActiveTeamMember] = useState<TeamMember | null>(null);

  // Group team members into rows of 3
  const teamRows: TeamMember[][] = [];
  for (let i = 0; i < TEAM_MEMBERS.length; i += 3) {
    teamRows.push(TEAM_MEMBERS.slice(i, i + 3));
  }

  const handleTeamClick = (member: TeamMember, rowIndex: number) => {
    if (activeTeamMember?.id === member.id) {
      // Close if same member clicked
      setActiveTeamRow(null);
      setActiveTeamMember(null);
    } else {
      setActiveTeamRow(rowIndex);
      setActiveTeamMember(member);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase">{I18N['menu-about'][lang]}</h2>
            <div className="mb-20">
               {/* Placeholder for Logo Image */}
               <div className="w-full max-w-lg mb-12 opacity-80 mix-blend-screen bg-white h-24 mask-image" style={{maskImage: 'url(https://via.placeholder.com/300x100?text=LOGO)', WebkitMaskImage: 'url(https://via.placeholder.com/300x100?text=LOGO)'}}>
                  {/* Using text fallback since image is local in prompt */}
                  <h3 className="text-4xl font-serif italic text-black bg-white p-2 inline-block">Collective Noroo Jumping</h3>
               </div>
               
               <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light whitespace-pre-line">
                 {I18N['about-desc'][lang]}
               </p>
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-6 py-3 border border-gray-600 rounded-full text-sm uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-hover"
            >
              Instagram @noroojumping
            </a>
          </div>
        );

      case 'team':
        return (
          <div className="max-w-6xl mx-auto">
             <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase">{I18N['menu-team'][lang]}</h2>
             <div className="w-full">
                {teamRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {row.map((member) => (
                        <div 
                          key={member.id}
                          onClick={() => handleTeamClick(member, rowIndex)}
                          className={`relative h-[300px] md:h-[400px] bg-neutral-900 overflow-hidden cursor-hover group ${activeTeamMember?.id === member.id ? 'ring-2 ring-accent' : ''}`}
                        >
                           <div 
                             className="absolute inset-0 bg-cover bg-center transition-all duration-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                             style={{ backgroundImage: `url('${member.image}')` }}
                           />
                           <div className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none mix-blend-difference text-white">
                              <span className="text-xs uppercase tracking-[0.2em] mb-2 opacity-80">{member.role}</span>
                              <span className="text-3xl font-serif font-bold">{member.name}</span>
                           </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Expander Panel */}
                    <AnimatePresence>
                      {activeTeamRow === rowIndex && activeTeamMember && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                          className="overflow-hidden bg-[#111] border-l-2 border-accent mt-5"
                        >
                           <div className="p-10">
                              <h3 className="text-4xl font-serif italic mb-2">{activeTeamMember.name}</h3>
                              <p className="text-accent uppercase font-bold text-sm mb-6">{activeTeamMember.role}</p>
                              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                                {TEAM_DESC[activeTeamMember.descKey]?.[lang] || "..."}
                              </p>
                              <div 
                                className="mt-8 text-xs text-gray-500 cursor-hover hover:text-white"
                                onClick={() => { setActiveTeamRow(null); setActiveTeamMember(null); }}
                              >
                                Click to close
                              </div>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
             </div>
          </div>
        );

      case 'activity':
        return (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase">{I18N['menu-activity'][lang]}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {ACTIVITIES.map((activity) => (
                 <div 
                   key={activity.id}
                   onClick={() => setActiveActivity(activity)}
                   className="relative h-[400px] bg-neutral-900 overflow-hidden cursor-hover group"
                 >
                    <div 
                       className="absolute inset-0 bg-cover bg-center transition-all duration-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                       style={{ backgroundImage: `url('${activity.image}')` }}
                    />
                    <div className="absolute bottom-0 left-0 p-6 z-10 w-full bg-gradient-to-t from-black/80 to-transparent">
                       <span className="text-accent font-bold block mb-1">{activity.year}</span>
                       <span className="text-2xl font-bold text-white block">{activity.title}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        );

      case 'archive':
        return (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase">{I18N['menu-archive'][lang]}</h2>
            <ArchiveList items={ARCHIVES} lang={lang} />
          </div>
        );

      case 'press':
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase">{I18N['menu-press'][lang]}</h2>
            <div className="mt-10 border-t border-border">
               {PRESS.map((item) => (
                 <a 
                   key={item.id} 
                   href={item.link} 
                   className="block py-8 border-b border-border group transition-all hover:pl-6 cursor-hover"
                 >
                    <h3 className="text-2xl md:text-3xl font-serif italic text-white group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <span className="block mt-3 text-sm text-gray-500 font-sans">{item.date}</span>
                 </a>
               ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-background text-text min-h-screen font-sans selection:bg-accent selection:text-white">
      <CustomCursor />

      {/* Header */}
      <header className="fixed top-0 w-full p-8 md:p-10 z-[200] flex justify-between items-start mix-blend-difference pointer-events-none">
        <div 
          className="font-black text-lg md:text-xl leading-tight tracking-tighter cursor-hover pointer-events-auto"
          onClick={() => {
            setCurrentSection('main');
            setIsMenuOpen(false);
            setActiveActivity(null);
          }}
        >
          COLLECTIVE<br />NOROOJUMPING
        </div>
        <div className="flex gap-4 font-semibold pointer-events-auto">
          {(['ko', 'en', 'fr'] as Language[]).map((l) => (
            <span 
              key={l}
              onClick={() => setLang(l)}
              className={`cursor-hover transition-colors opacity-50 hover:opacity-100 hover:text-accent ${lang === l ? 'opacity-100 text-accent' : ''}`}
            >
              {l.toUpperCase()}
            </span>
          ))}
        </div>
      </header>

      {/* Menu Button */}
      {!activeActivity && (
         <div 
           onClick={() => setIsMenuOpen(!isMenuOpen)}
           className="fixed bottom-10 right-10 md:bottom-12 md:right-12 z-[300] font-black text-2xl uppercase mix-blend-difference cursor-hover cursor-pointer"
         >
           {isMenuOpen ? 'CLOSE' : (currentSection === 'main' ? 'MENU' : 'MENU')}
         </div>
      )}

      {/* Close Button for Sections (Top Right) */}
      {currentSection !== 'main' && !isMenuOpen && !activeActivity && (
        <div 
          onClick={() => setCurrentSection('main')}
          className="fixed top-24 right-10 md:right-12 z-[300] text-3xl font-light mix-blend-difference cursor-hover cursor-pointer"
        >
          ✕
        </div>
      )}

      {/* Navigation Overlay */}
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} setSection={setCurrentSection} lang={lang} />

      {/* Main Hero Section */}
      <AnimatePresence>
        {currentSection === 'main' && (
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-10 flex justify-center items-center overflow-hidden"
          >
             {/* Background Image: Imported to ensure it's bundled */}
             <div 
               className="absolute inset-0 bg-cover bg-center z-0 scale-100 hover:scale-105 transition-transform duration-[10000ms] ease-linear"
               style={{ backgroundImage: `url('${mainBg}')` }}
             ></div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        {currentSection !== 'main' && (
          <motion.section
            key={currentSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[120] bg-background pt-32 pb-20 px-6 md:px-12 overflow-y-auto"
          >
            {renderSection()}
          </motion.section>
        )}
      </AnimatePresence>

      {/* Activity Detail Modal */}
      <AnimatePresence>
        {activeActivity && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
            className="fixed inset-0 z-[130] bg-background overflow-y-auto"
          >
             <div 
               onClick={() => setActiveActivity(null)}
               className="fixed top-24 right-10 z-[140] border border-white px-4 py-1 rounded-full uppercase text-sm cursor-hover cursor-pointer mix-blend-difference hover:bg-white hover:text-black"
             >
               {I18N['back'][lang]}
             </div>
             
             <div 
               className="w-full h-[40vh] bg-cover bg-center grayscale"
               style={{ backgroundImage: `url('${activeActivity.image}')` }}
             />
             
             <div className="max-w-4xl mx-auto p-10">
                <h2 className="text-4xl md:text-6xl font-serif mb-6">{activeActivity.title}</h2>
                <div className="text-accent mb-8 font-mono">{activeActivity.dateStr}</div>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                   {ACTIVITY_DESC[activeActivity.descKey]?.[lang]}
                </p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full p-8 text-center text-[0.6rem] md:text-xs opacity-60 z-[200] pointer-events-none mix-blend-difference">
         {I18N['footer-copy'][lang]}
      </footer>
    </div>
  );
}

export default App;