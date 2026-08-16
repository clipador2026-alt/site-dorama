import StreetViewEmbed from "./components/StreetViewEmbed";

const dramas = [
  {
    title: "When the Spring Comes",
    meta: "Romance • 2026",
    tone: "pink",
    emoji: "🌸",
    status: "EM EXIBIÇÃO",
    rating: "9.1",
    tag: "♡ favorito",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Seoul After Rain",
    meta: "Romance • Drama",
    tone: "blue",
    emoji: "☔",
    status: "NOVO",
    rating: "8.8",
    tag: "chuva + romance",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Our Little Recipe",
    meta: "Comédia • Romance",
    tone: "cream",
    emoji: "🍜",
    status: "QUENTINHO",
    rating: "9.0",
    tag: "food drama",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Moonlight Contract",
    meta: "Fantasia • Romance",
    tone: "green",
    emoji: "🌙",
    status: "TRENDING",
    rating: "9.3",
    tag: "slow burn",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
  },
];

const news = [
  "Os 10 doramas que estão dominando as conversas",
  "Novos lançamentos para colocar na sua lista",
  "Onde assistir aos principais K-Dramas da semana",
];

const actors = [
  { 
    name: "Ji-hyun", 
    role: "atriz favorita", 
    tone: "blush", 
    emoji: "🌸",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Min-jae", 
    role: "novo crush", 
    tone: "sky", 
    emoji: "⭐",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Seo-jun", 
    role: "rei do romance", 
    tone: "butter", 
    emoji: "👑",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Ha-neul", 
    role: "cena roubada", 
    tone: "mint", 
    emoji: "♡",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" 
  },
];

const classics = [
  { 
    title: "Seoul 1988", 
    label: "clássico", 
    tone: "pink",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    title: "Incha Candy", 
    label: "conforto", 
    tone: "cream",
    image: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    title: "Meet Your Dream Cast", 
    label: "favorito", 
    tone: "blue",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=80" 
  },
];

const koreaLocations = [
  { 
    title: "Gyeongbokgung Palace", 
    place: "Seoul", 
    category: "HISTÓRIA", 
    type: "history", 
    emoji: "🏯", 
    copy: "O palácio real mais famoso de Seoul e uma das melhores portas de entrada para a história da Coreia.", 
    map: "https://www.google.com/maps/search/?api=1&query=Gyeongbokgung+Palace+Seoul+South+Korea", 
    street: "https://www.google.com/maps/@?api=1&map_action=pano&query=Gyeongbokgung+Palace+Seoul+South+Korea", 
    coordinates: "37.579617,126.977041",
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Yeongjin Beach", 
    place: "Gangneung", 
    category: "K-DRAMA", 
    type: "drama", 
    emoji: "🌊", 
    copy: "O famoso quebra-mar de Goblin, um dos cenários mais reconhecíveis dos K-Dramas.", 
    drama: "Goblin", 
    map: "https://www.google.com/maps/search/?api=1&query=Yeongjin+Beach+Gangneung+South+Korea", 
    street: "https://www.google.com/maps/@?api=1&map_action=pano&query=Yeongjin+Beach+Gangneung+South+Korea", 
    coordinates: "37.920556,128.819722",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Sewoon Plaza", 
    place: "Seoul", 
    category: "K-DRAMA", 
    type: "drama", 
    emoji: "🎬", 
    copy: "O complexo que ganhou vida como Geumga Plaza em Vincenzo.", 
    drama: "Vincenzo", 
    map: "https://www.google.com/maps/search/?api=1&query=Sewoon+Plaza+Seoul+South+Korea", 
    street: "https://www.google.com/maps/@?api=1&map_action=pano&query=Sewoon+Plaza+Seoul+South+Korea", 
    coordinates: "37.5708,126.9948",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "BTS Bus Stop", 
    place: "Gangneung", 
    category: "K-POP", 
    type: "kpop", 
    emoji: "💜", 
    copy: "O ponto de ônibus de Hyangho Beach que se tornou um photo spot inesquecível para ARMYs.", 
    artist: "BTS", 
    map: "https://www.google.com/maps/search/?api=1&query=BTS+Bus+Stop+Hyangho+Beach+Gangneung+South+Korea", 
    street: "https://www.google.com/maps/@?api=1&map_action=pano&query=BTS+Bus+Stop+Hyangho+Beach+Gangneung+South+Korea", 
    coordinates: "37.9215,128.8224",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "Bukchon Hanok Village", 
    place: "Seoul", 
    category: "TURISMO", 
    type: "travel", 
    emoji: "🏘️", 
    copy: "Ruas de casas hanok entre palácios e cafés, perfeitas para caminhar e fotografar.", 
    map: "https://www.google.com/maps/search/?api=1&query=Bukchon+Hanok+Village+Seoul+South+Korea", 
    street: "https://www.google.com/maps/@?api=1&map_action=pano&query=Bukchon+Hanok+Village+Seoul+South+Korea", 
    coordinates: "37.5826,126.9830",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=600&q=80"
  },
  { 
    title: "K-Star Road", 
    place: "Gangnam, Seoul", 
    category: "K-POP", 
    type: "kpop", 
    emoji: "⭐", 
    copy: "Uma parada para quem quer explorar a cultura Hallyu no coração de Gangnam.", 
    map: "https://www.google.com/maps/search/?api=1&query=K-Star+Road+Gangnam+Seoul+South+Korea", 
    street: "https://www.google.com/maps/@?api=1&map_action=pano&query=K-Star+Road+Gangnam+Seoul+South+Korea", 
    coordinates: "37.5267,127.0380",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80"
  },
];

const koreaFilters = [
  { label: "Todos", value: "all" },
  { label: "🏯 História", value: "history" },
  { label: "🎬 K-Drama", value: "drama" },
  { label: "💜 K-Pop", value: "kpop" },
  { label: "🌸 Turismo", value: "travel" },
];
