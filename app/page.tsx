const dramas = [
  {
    title: "When the Spring Comes",
    meta: "Romance • 2026",
    tone: "pink",
    emoji: "🌸",
    status: "EM EXIBIÇÃO",
    rating: "9.1",
    tag: "♡ favorito",
  },
  {
    title: "Seoul After Rain",
    meta: "Romance • Drama",
    tone: "blue",
    emoji: "☔",
    status: "NOVO",
    rating: "8.8",
    tag: "chuva + romance",
  },
  {
    title: "Our Little Recipe",
    meta: "Comédia • Romance",
    tone: "cream",
    emoji: "🍜",
    status: "QUENTINHO",
    rating: "9.0",
    tag: "food drama",
  },
  {
    title: "Moonlight Contract",
    meta: "Fantasia • Romance",
    tone: "green",
    emoji: "🌙",
    status: "TRENDING",
    rating: "9.3",
    tag: "slow burn",
  },
];

const news = [
  "Os 10 doramas que estão dominando as conversas",
  "Novos lançamentos para colocar na sua lista",
  "Onde assistir aos principais K-Dramas da semana",
];

const actors = [
  { name: "Ji-hyun", role: "atriz favorita", tone: "blush", emoji: "🌸" },
  { name: "Min-jae", role: "novo crush", tone: "sky", emoji: "⭐" },
  { name: "Seo-jun", role: "rei do romance", tone: "butter", emoji: "👑" },
  { name: "Ha-neul", role: "cena roubada", tone: "mint", emoji: "♡" },
];

const classics = [
  { title: "Seoul 1988", label: "clássico", tone: "pink" },
  { title: "Incha Candy", label: "conforto", tone: "cream" },
  { title: "Meet Your Dream Cast", label: "favorito", tone: "blue" },
];

const koreaLocations = [
  { title: "Gyeongbokgung Palace", place: "Seoul", category: "HISTÓRIA", type: "history", emoji: "🏯", copy: "O palácio real mais famoso de Seoul e uma das melhores portas de entrada para a história da Coreia.", coordinates: "37.579617,126.977041", map: "https://www.google.com/maps/search/?api=1&query=Gyeongbokgung+Palace+Seoul+South+Korea" },
  { title: "Yeongjin Beach", place: "Gangneung", category: "K-DRAMA", type: "drama", emoji: "🌊", copy: "O famoso quebra-mar de Goblin, um dos cenários mais reconhecíveis dos K-Dramas.", drama: "Goblin", coordinates: "37.920556,128.819722", map: "https://www.google.com/maps/search/?api=1&query=Yeongjin+Beach+Gangneung+South+Korea" },
  { title: "Sewoon Plaza", place: "Seoul", category: "K-DRAMA", type: "drama", emoji: "🎬", copy: "O complexo que ganhou vida como Geumga Plaza em Vincenzo.", drama: "Vincenzo", coordinates: "37.5708,126.9948", map: "https://www.google.com/maps/search/?api=1&query=Sewoon+Plaza+Seoul+South+Korea" },
  { title: "BTS Bus Stop", place: "Gangneung", category: "K-POP", type: "kpop", emoji: "💜", copy: "O ponto de ônibus de Hyangho Beach que se tornou um photo spot inesquecível para ARMYs.", artist: "BTS", coordinates: "37.9215,128.8224", map: "https://www.google.com/maps/search/?api=1&query=BTS+Bus+Stop+Hyangho+Beach+Gangneung+South+Korea" },
  { title: "Bukchon Hanok Village", place: "Seoul", category: "TURISMO", type: "travel", emoji: "🏘️", copy: "Ruas de casas hanok entre palácios e cafés, perfeitas para caminhar e fotografar.", coordinates: "37.5826,126.9830", map: "https://www.google.com/maps/search/?api=1&query=Bukchon+Hanok+Village+Seoul+South+Korea" },
  { title: "K-Star Road", place: "Gangnam, Seoul", category: "K-POP", type: "kpop", emoji: "⭐", copy: "Uma parada para quem quer explorar a cultura Hallyu no coração de Gangnam.", coordinates: "37.5267,127.0380", map: "https://www.google.com/maps/search/?api=1&query=K-Star+Road+Gangnam+Seoul+South+Korea" },
];

const koreaFilters = [
  { label: "Todos", value: "all" },
  { label: "🏯 História", value: "history" },
  { label: "🎬 K-Drama", value: "drama" },
  { label: "💜 K-Pop", value: "kpop" },
  { label: "🌸 Turismo", value: "travel" },
];

function LocationCard({ location }: { location: (typeof koreaLocations)[number] }) {
  return (
    <article className={`location-card ${location.type}`}>
      <div className="location-art">
        <span className="location-tape" />
        <span className="location-emoji">{location.emoji}</span>
        <span className="location-category">{location.category}</span>
        <div className="location-art-copy">
          <small>{location.place}</small>
          <strong>{location.title}</strong>
          {location.drama && <i>🎬 {location.drama}</i>}
          {location.artist && <i>💜 {location.artist}</i>}
        </div>
      </div>
      <div className="location-body">
        <span className="location-korean">서울에서 만나요 ♡</span>
        <h3>{location.title}</h3>
        <p>{location.copy}</p>
        <div className="location-actions">
          <a href={location.map} target="_blank" rel="noreferrer" className="map-button">📍 Google Maps ↗</a>
          <StreetViewEmbed title={location.title} coordinates={location.coordinates} googleMapsUrl={location.map} />
        </div>
      </div>
    </article>
  );
}

const categories = [
  { name: "Romance", copy: "borboletas no estômago", emoji: "🌸", className: "romance" },
  { name: "Comédia", copy: "para rir e relaxar", emoji: "🍜", className: "comedy" },
  { name: "Fantasia", copy: "um pouco de magia", emoji: "🌙", className: "fantasy" },
  { name: "Suspense", copy: "não pisque", emoji: "🎞️", className: "thriller" },
];

function DramaCard({ drama }: { drama: (typeof dramas)[number] }) {
  return (
    <article className={`drama-card ${drama.tone}`}>
      <div className="poster">
        <span className="poster-sticker">{drama.emoji}</span>
        <span className="poster-status">{drama.status}</span>
        <span className="poster-tape" />
        <div className="poster-scene">
          <span>{drama.title.split(" ")[0]}</span>
          <strong>{drama.title.split(" ").slice(1).join(" ")}</strong>
          <small>{drama.meta}</small>
        </div>
        <span className="poster-heart">♡</span>
      </div>
      <div className="drama-info">
        <div>
          <span className="mini-korean">사랑해</span>
          <h3>{drama.title}</h3>
          <p>{drama.meta}</p>
        </div>
        <span className="rating">★ {drama.rating}</span>
      </div>
      <div className="card-tag">{drama.tag}</div>
    </article>
  );
}

function ActorCard({ actor }: { actor: (typeof actors)[number] }) {
  return (
    <article className={`actor-card ${actor.tone}`}>
      <div className="actor-photo">
        <span className="actor-sticker">{actor.emoji}</span>
        <span className="actor-portrait">{actor.name.slice(0, 1)}</span>
        <span className="actor-badge">♥</span>
      </div>
      <strong>{actor.name}</strong>
      <small>{actor.role}</small>
    </article>
  );
}

import StreetViewEmbed from "./components/StreetViewEmbed";

export default function Home() {
  return (
    <main>
      {/* O restante da página permanece igual; a seção Conheça a Korea agora usa o componente StreetViewEmbed. */}
      <section id="conheca-korea" className="korea-section">
        <div className="korea-inner">
          <div className="korea-hero">
            <div>
              <span className="eyebrow">03 · VIAJE PELO SEOUL BLOOM</span>
              <h2>Conheça a <em>Korea</em> que você vê nas telas.</h2>
              <p>Dos palácios aos cenários dos seus K-Dramas e aos lugares que entraram para a história do K-Pop. Descubra o endereço real, salve para sua viagem e explore como se estivesse lá.</p>
            </div>
            <div className="korea-stamp"><span>SEOUL</span><strong>MAP</strong><small>DRAMA · K-POP · HISTORY</small></div>
          </div>

          <div className="korea-tabs" aria-label="Filtros de Conheça a Korea">
            {koreaFilters.map((filter, index) => (
              <a href={index === 0 ? "#conheca-korea" : `#korea-${filter.value}`} className={index === 0 ? "selected" : ""} key={filter.value}>{filter.label}</a>
            ))}
          </div>

          <div className="korea-highlight">
            <div className="korea-map-illustration">
              <span className="map-city seoul">SEOUL</span><span className="map-city gangneung">GANGNEUNG</span>
              <span className="map-dot dot-seoul">●</span><span className="map-dot dot-gangneung">●</span><span className="map-route" />
              <span className="map-sticker">📍</span><span className="map-wave">〰〰〰</span><span className="map-korean">한국</span>
            </div>
            <div className="korea-highlight-copy">
              <span className="eyebrow">COMECE POR AQUI</span>
              <h3>Do seu drama favorito para o lugar real.</h3>
              <p>Agora você pode abrir o Street View sem sair do Seoul Bloom. O panorama 360° aparece aqui na página e você pode colocar em tela cheia quando quiser.</p>
              <div className="korea-legend"><span>📍 <b>Google Maps</b> — localização e como chegar</span><span>👀 <b>Ver na vida real</b> — Street View dentro do site</span></div>
            </div>
          </div>

          <div className="korea-subheading"><div><span className="eyebrow">03A · DENTRO DOS K-DRAMAS</span><h3>Os lugares que você reconhece da tela <i>♡</i></h3></div><a href="#korea-drama">ver todos ↗</a></div>
          <div id="korea-drama" className="location-grid">{koreaLocations.filter((location) => location.type === "drama").map((location) => <LocationCard key={location.title} location={location} />)}</div>

          <div className="korea-subheading lower"><div><span className="eyebrow">03B · K-POP & HALLYU</span><h3>Lugares que viraram parte da história <i>💜</i></h3></div><a href="#korea-kpop">explorar K-Pop ↗</a></div>
          <div id="korea-kpop" className="location-grid">{koreaLocations.filter((location) => location.type === "kpop").map((location) => <LocationCard key={location.title} location={location} />)}</div>

          <div className="korea-subheading lower"><div><span className="eyebrow">03C · COREIA PARA CONHECER</span><h3>História, arquitetura e lugares para sonhar <i>🌸</i></h3></div><a href="#korea-history">ver o mapa ↗</a></div>
          <div id="korea-history" className="location-grid">{koreaLocations.filter((location) => location.type === "history" || location.type === "travel").map((location) => <LocationCard key={location.title} location={location} />)}</div>
        </div>
      </section>
    </main>
  );
}
