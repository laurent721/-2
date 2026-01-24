import { TeamMember, Activity, ArchiveItem, PressItem, I18nDictionary } from './types';

// 메인 페이지 이미지 URL 설정
// 방법 1 (권장): 프로젝트 최상단에 'public' 폴더를 만들고 이미지를 넣은 뒤 파일명을 적으세요. (예: "main-visual.jpg")
// 방법 2 (외부 링크): GitHub Issue에 이미지를 업로드하고 생성된 링크를 붙여넣으세요.
export const HERO_IMAGE_URL = "main-visual.jpg";

export const I18N: I18nDictionary = {
  "hero-text": {
    ko: "\"관악 마운틴 노루 점핑\"",
    en: "\"Kwanak Mountain Noroo Jumping\"",
    fr: "\"Kwanak Mountain Noroo Jumping\""
  },
  "menu-about": { ko: "소개", en: "ABOUT", fr: "À PROPOS" },
  "menu-team": { ko: "팀원", en: "TEAM", fr: "ÉQUIPE" },
  "menu-activity": { ko: "활동", en: "ACTIVITY", fr: "ACTIVITÉ" },
  "menu-archive": { ko: "아카이브", en: "ARCHIVE", fr: "ARCHIVES" },
  "menu-press": { ko: "보도", en: "PRESS", fr: "PRESSE" },
  "about-desc": {
    ko: "연주대를 지붕 삼아 학문에 크지도 작지도 않은 뜻을 두고 폐관수련을 이어오던 대학원생 셋이 재미로움을 좇아 일단 무언가를 해보자 하고 의기투합하여 자하동으로 흘러드는 냇가에 모여 쿠키를 나누며 의를 맺었습니다. 학문과 예술의 경계를 노루가 뛰놀듯 넘나들고자 하였으니, 관악에 전해 내려오는 전설 같은 고사들 중에서 출전의 근거로 삼아 이들의 모임을 일컬어 '노루점핑'이라 이름지었습니다.",
    en: "Three graduate students, taking Yeonjudae as their roof and aiming for scholarship, gathered by the stream flowing into Jahadong to pursue fun. We named our collective 'Noroo Jumping', inspired by the legend of a roe deer jumping across boundaries.",
    fr: "Trois étudiants diplômés se sont réunis près du ruisseau de Jahadong pour poursuivre le plaisir. Nous avons nommé notre collectif 'Noroo Jumping', inspiré par la légende d'un chevreuil sautant à travers les frontières."
  },
  "footer-copy": {
    ko: "© 2026 COLLECTIVE NOROOJUMPING, SEOUL. ALL RIGHTS RESERVED.",
    en: "© 2026 COLLECTIVE NOROOJUMPING, SEOUL. ALL RIGHTS RESERVED.",
    fr: "© 2026 COLLECTIVE NOROOJUMPING, SEOUL. ALL RIGHTS RESERVED."
  },
  "back": { ko: "뒤로", en: "BACK", fr: "RETOUR" },
  // Tab Labels
  "tab-overview": { ko: "개요", en: "Overview", fr: "Aperçu" },
  "tab-performance": { ko: "상연", en: "Performance", fr: "Performance" },
  "tab-photos": { ko: "사진", en: "Photos", fr: "Photos" },
  "tab-crew": { ko: "제작진", en: "Crew", fr: "Équipe" },
  "tab-techrider": { ko: "테크니컬 라이더", en: "Tech Rider", fr: "Fiche Technique" },
};

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: "안건우", role: "프로듀서", descKey: "team-1-desc", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" },
  { id: 2, name: "정수미", role: "공간연출", descKey: "team-2-desc", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" },
  { id: 3, name: "장민영", role: "드라마투르기", descKey: "team-3-desc", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80" },
  { id: 4, name: "송애빈", role: "기획", descKey: "team-4-desc", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80" },
  { id: 5, name: "고은설", role: "연출", descKey: "team-5-desc", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80" },
  { id: 6, name: "김성민", role: "기획", descKey: "team-6-desc", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80" }
];

export const TEAM_DESC: I18nDictionary = {
  "team-1-desc": { ko: "프로듀서 안건우는 모든 프로젝트의 뼈대를 만듭니다.", en: "Producer Ahn Kun-woo builds the framework.", fr: "Le producteur Ahn Kun-woo construit le cadre." },
  "team-2-desc": { ko: "공간연출 정수미는 무대 위 보이지 않는 공기를 디자인합니다.", en: "Scenographer Jung Su-mi designs invisible air.", fr: "La scénographe Jung Su-mi dessine l'air invisible." },
  "team-3-desc": { ko: "드라마투르기 장민영은 서사의 맥락을 짚어냅니다.", en: "Dramaturg Jang Min-young pinpoints context.", fr: "La dramaturge Jang Min-young identifie le contexte." },
  "team-4-desc": { ko: "기획 송애빈은 현실과 이상 사이를 조율합니다.", en: "Planner Song Ae-bin tunes reality and ideals.", fr: "La planificatrice Song Ae-bin s'accorde entre réalité et idéal." },
  "team-5-desc": { ko: "연출 고은설은 배우와 관객의 호흡을 지휘합니다.", en: "Director Go Eun-seol orchestrates breath.", fr: "La metteur en scène Go Eun-seol orchestre le souffle." },
  "team-6-desc": { ko: "기획 김성민은 새로운 가능성을 모색합니다.", en: "Planner Kim Seong-min explores possibilities.", fr: "Le planificateur Kim Seong-min explore de nouvelles possibilités." }
};

export const ACTIVITIES: Activity[] = [
  { 
    id: "event-1", 
    year: "2026", 
    title: "사물대소동", 
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    descKey: "event-1-desc",
    dateStr: "2026. 05. 01"
  },
  { 
    id: "event-2", 
    year: "2025", 
    title: "TBC 가족 여러분 안녕히 계셨읍니까", 
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80",
    descKey: "event-2-desc",
    dateStr: "2025. 11. 15"
  }
];

export const ACTIVITY_DESC: I18nDictionary = {
  "event-1-desc": { 
    ko: "'사물대소동'은 일상의 사물들이 반란을 일으키는 과정을 그립니다.\n\n관객은 사물의 관점에서 세상을 다시 바라보게 됩니다.",
    en: "'Object Chaos' depicts the rebellion of everyday objects.\n\nThe audience sees the world from the object's perspective.",
    fr: "'Chaos des Objets' dépeint la rébellion des objets du quotidien."
  },
  "event-2-desc": {
    ko: "'TBC 가족 여러분'은 미디어의 역사와 개인의 기억을 연결합니다.\n\n잊혀진 방송 신호를 추적하는 여정입니다.",
    en: "'Hello TBC Family' connects media history with personal memories.\n\nA journey tracing forgotten broadcast signals.",
    fr: "'Bonjour Famille TBC' relie l'histoire des médias aux souvenirs personnels."
  }
};

export const ARCHIVES: ArchiveItem[] = [
  {
    id: "arch-1",
    title: "사물대소동",
    place: "서울대학교 인문소극장",
    year: "2026",
    content: {
      overview: "프로젝트 알파는 우리의 첫 번째 시도였습니다. 디지털과 아날로그의 융합을 주제로 실험적인 무대를 구성했습니다. 관객 참여형 퍼포먼스로 큰 호응을 얻었습니다.",
      performance: "총 3막으로 구성된 공연은 사물의 탄생, 반란, 그리고 화해를 다룹니다. 배우들은 오브제와 하나가 되어 움직입니다.",
      crew: "연출: 고은설\n기획: 송애빈, 김성민\n드라마투르기: 장민영\n공간: 정수미\n프로듀서: 안건우\n\n조명디자인: 이빛나\n음향감독: 박소리\n무대감독: 최현장",
      photos: ["https://picsum.photos/400/300", "https://picsum.photos/401/300", "https://picsum.photos/402/300"],
      techRider: "조명: ETC Ion XE, 음향: d&b audiotechnik, 무대 크기: 12m x 9m. 전력: 3상 4선식 50kW."
    }
  },
  {
    id: "arch-2",
    title: "TBC 가족 여러분 안녕히 계셨읍니까",
    place: "서울대학교 제1파워플랜트",
    year: "2025",
    content: {
      overview: "서울 디자인 위크에 참여하여 '도시의 소음'을 주제로 한 설치 미술을 선보였습니다. 과거 방송국의 아카이브 자료를 재해석했습니다.",
      performance: "관객은 헤드폰을 착용하고 전시장을 배회하며 각기 다른 주파수의 소리를 청취합니다. 특정 지점에서 퍼포머가 등장합니다.",
      crew: "총괄: 안건우\n공간연출: 정수미\n사운드: 김소리\n아카이빙: 박기록\n\n출연: 노루 점핑 일동",
      photos: ["https://picsum.photos/400/301", "https://picsum.photos/401/301"],
      techRider: "영상: 10,000 ANSI Projector x 4, 매핑 서버: Resolume Arena, 음향: 무선 헤드폰 시스템 50대."
    }
  }
];

export const PRESS: PressItem[] = [
  { id: "p1", title: "Art Collective Seoul, 새로운 지평을 열다", date: "Art Magazine, 2025.01.15", link: "#" },
  { id: "p2", title: "침묵을 전시하다: 이색적인 시도", date: "Daily News, 2024.11.20", link: "#" }
];