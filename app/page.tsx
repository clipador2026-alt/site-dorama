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
  { title: "Gyeongbokgung Palace", place: "Seoul", category: "HISTÓRIA", type: "history", emoji: "🏯", copy: "O palácio real mais famoso de Seoul e uma das melhores portas de entrada para a história da Coreia.", map: "https://www.google.com/maps/search/?api=1&query=Gyeongbokgung+Palace+Seoul+South+Korea", street: "https://www.google.com/maps/@?api=1&map_action=pano&query=Gyeongbokgung+Palace+Seoul+South+Korea" , coordinates: "37.579617,126.977041"},
  { title: "Yeongjin Beach", place: "Gangneung", category: "K-DRAMA", type: "drama", emoji: "🌊", copy: "O famoso quebra-mar de Goblin, um dos cenários mais reconhecíveis dos K-Dramas.", drama: "Goblin", map: "https://www.google.com/maps/search/?api=1&query=Yeongjin+Beach+Gangneung+South+Korea", street: "https://www.google.com/maps/@?api=1&map_action=pano&query=Yeongjin+Beach+Gangneung+South+Korea" , coordinates: "37.920556,128.819722"},
  { title: "Sewoon Plaza", place: "Seoul", category: "K-DRAMA", type: "drama", emoji: "🎬", copy: "O complexo que ganhou vida como Geumga Plaza em Vincenzo.", drama: "Vincenzo", map: "https://www.google.com/maps/search/?api=1&query=Sewoon+Plaza+Seoul+South+Korea", street: "https://www.google.com/maps/@?api=1&map_action=pano&query=Sewoon+Plaza+Seoul+South+Korea" , coordinates: "37.5708,126.9948"},
  { title: "BTS Bus Stop", place: "Gangneung", category: "K-POP", type: "kpop", emoji: "💜", copy: "O ponto de ônibus de Hyangho Beach que se tornou um photo spot inesquecível para ARMYs.", artist: "BTS", map: "https://www.google.com/maps/search/?api=1&query=BTS+Bus+Stop+Hyangho+Beach+Gangneung+South+Korea", street: "https://www.google.com/maps/@?api=1&map_action=pano&query=BTS+Bus+Stop+Hyangho+Beach+Gangneung+South+Korea" , coordinates: "37.9215,128.8224"},
  { title: "Bukchon Hanok Village", place: "Seoul", category: "TURISMO", type: "travel", emoji: "🏘️", copy: "Ruas de casas hanok entre palácios e cafés, perfeitas para caminhar e fotografar.", map: "https://www.google.com/maps/search/?api=1&query=Bukchon+Hanok+Village+Seoul+South+Korea", street: "https://www.google.com/maps/@?api=1&map_action=pano&query=Bukchon+Hanok+Village+Seoul+South+Korea" , coordinates: "37.5826,126.9830"},
  { title: "K-Star Road", place: "Gangnam, Seoul", category: "K-POP", type: "kpop", emoji: "⭐", copy: "Uma parada para quem quer explorar a cultura Hallyu no coração de Gangnam.", map: "https://www.google.com/maps/search/?api=1&query=K-Star+Road+Gangnam+Seoul+South+Korea", street: "https://www.google.com/maps/@?api=1&map_action=pano&query=K-Star+Road+Gangnam+Seoul+South+Korea" , coordinates: "37.5267,127.0380"},
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
          <StreetViewEmbed
            title={location.title}
            coordinates={location.coordinates}
          />
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

export default function Home() {
  return (
    <main>
      <div className="top-strip">
        <span>서울 · SEOUL</span>
        <span>✿ K-DRAMA · 사랑해 · WATCHLIST ♡</span>
        <span>오늘도 정주행 중 🎬</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#">
          <span className="brand-icon">🌸</span>
          <span className="brand-copy">
            <small>THE K-DRAMA JOURNAL</small>
            SEOUL <b>BLOOM</b>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a className="active" href="#">Início</a>
          <a href="#doramas">Doramas</a>
          <a className="korea-nav" href="#conheca-korea">🌸 Conheça a Korea</a>
          <a href="#atores">Atores</a>
          <a href="#noticias">Notícias</a>
          <a href="#rankings">Rankings</a>
          <a href="#guias">Guias</a>
        </nav>

        <div className="header-tools">
          <label className="search-box">
            <span>⌕</span>
            <input aria-label="Pesquisar" placeholder="Buscar um dorama..." />
          </label>
          <button className="menu-button" aria-label="Abrir menu">☰</button>
        </div>
      </header>

      <section className="welcome">
        <div className="welcome-copy">
          <span className="eyebrow">✦ BEM-VINDA AO SEU CANTINHO ✦</span>
          <h1>Um lugar para <em>amar</em>, descobrir e maratonar K-Dramas.</h1>
          <p>
            Notícias, doramas em alta, atores favoritos, listas e aquele próximo
            vício que vai fazer você dizer: só mais um episódio.
          </p>
          <div className="welcome-actions">
            <a href="#doramas" className="button">Começar a explorar ↗</a>
            <span className="hand-note">사랑해 ♡</span>
          </div>
          <div className="welcome-stickers" aria-hidden="true">
            <span>🍜</span><span>🎬</span><span>♡</span><span>🌸</span>
          </div>
        </div>

        <div className="welcome-board">
          <span className="board-tape tape-left" />
          <span className="board-tape tape-right" />
          <div className="board-map">
            <span className="map-label one">SEOUL</span>
            <span className="map-label two">한강</span>
            <span className="map-label three">♡</span>
            <span className="map-line line-one" />
            <span className="map-line line-two" />
            <span className="map-line line-three" />
            <div className="board-polaroid">
              <span>SEOUL</span>
              <strong>MEMORIES</strong>
              <small>K-DRAMA DIARY · 2026</small>
            </div>
            <span className="board-sticker">사랑해</span>
            <span className="board-flower">🌸</span>
            <span className="board-camera">📷</span>
          </div>
        </div>
      </section>

      <div className="ticker">
        <span>🌸 NEW IN SEOUL</span>
        <span>🍜 WATCH LIST</span>
        <span>♡ K-DRAMA</span>
        <span>🎬 LET&apos;S WATCH</span>
        <span>✿ 사랑해</span>
        <span>⭐ FAVORITOS</span>
      </div>

      <section id="doramas" className="portal-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 · AGORA NA SUA TELA</span>
            <h2>Em exibição <i>♡</i></h2>
          </div>
          <a href="#">ver todos ↗</a>
        </div>

        <div className="content-split">
          <div className="drama-grid">
            {dramas.map((drama) => (
              <DramaCard key={drama.title} drama={drama} />
            ))}
          </div>

          <aside className="watch-note">
            <span className="note-pin">📌</span>
            <span className="eyebrow">WATCH LIST</span>
            <h3>O que está na sua fila?</h3>
            <p>Guarde seus próximos dramas e volte quando bater a vontade de maratonar.</p>
            <div className="watch-lines">
              <span>♡ Reply 1988</span>
              <span>♡ When the Spring Comes</span>
              <span>♡ Our Little Recipe</span>
            </div>
            <a href="#" className="text-link">abrir minha lista ↗</a>
          </aside>
        </div>
      </section>


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
              <span className="map-city seoul">SEOUL</span>
              <span className="map-city gangneung">GANGNEUNG</span>
              <span className="map-dot dot-seoul">●</span>
              <span className="map-dot dot-gangneung">●</span>
              <span className="map-route" />
              <span className="map-sticker">📍</span>
              <span className="map-wave">〰〰〰</span>
              <span className="map-korean">한국</span>
            </div>
            <div className="korea-highlight-copy">
              <span className="eyebrow">COMECE POR AQUI</span>
              <h3>Do seu drama favorito para o lugar real.</h3>
              <p>Cada ponto tem dois caminhos: abrir no Google Maps para ver endereço, fotos e rota ou entrar no Street View e explorar o lugar em 360°.</p>
              <div className="korea-legend">
                <span>📍 <b>Google Maps</b> — localização e como chegar</span>
                <span>👀 <b>Ver na vida real</b> — Street View</span>
              </div>
            </div>
          </div>

          <div className="korea-subheading">
            <div><span className="eyebrow">03A · DENTRO DOS K-DRAMAS</span><h3>Os lugares que você reconhece da tela <i>♡</i></h3></div>
            <a href="#korea-drama">ver todos ↗</a>
          </div>
          <div id="korea-drama" className="location-grid">
            {koreaLocations.filter((location) => location.type === "drama").map((location) => <LocationCard key={location.title} location={location} />)}
          </div>

          <div className="korea-subheading lower">
            <div><span className="eyebrow">03B · K-POP & HALLYU</span><h3>Lugares que viraram parte da história <i>💜</i></h3></div>
            <a href="#korea-kpop">explorar K-Pop ↗</a>
          </div>
          <div id="korea-kpop" className="location-grid">
            {koreaLocations.filter((location) => location.type === "kpop").map((location) => <LocationCard key={location.title} location={location} />)}
          </div>

          <div className="korea-subheading lower">
            <div><span className="eyebrow">03C · COREIA PARA CONHECER</span><h3>História, arquitetura e lugares para sonhar <i>🌸</i></h3></div>
            <a href="#korea-history">ver o mapa ↗</a>
          </div>
          <div id="korea-history" className="location-grid">
            {koreaLocations.filter((location) => location.type === "history" || location.type === "travel").map((location) => <LocationCard key={location.title} location={location} />)}
          </div>
        </div>
      </section>

      <section id="atores" className="portal-section actor-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">04 · QUEM ROUBOU A CENA?</span>
            <h2>Actor Spotlight <i>✦</i></h2>
          </div>
          <a href="#">ver elenco ↗</a>
        </div>

        <div className="actor-layout">
          <div className="actor-grid">
            {actors.map((actor) => <ActorCard key={actor.name} actor={actor} />)}
          </div>

          <div className="love-card">
            <span className="love-korean">사랑해요</span>
            <strong>quem é seu<br />novo crush?</strong>
            <span className="love-sticker">💗</span>
            <span className="love-small">vote · salve · surte</span>
          </div>
        </div>
      </section>

      <section className="portal-section classics-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">05 · MEMÓRIAS DE SEOUL</span>
            <h2>Clássicos que moram no coração <i>♡</i></h2>
          </div>
          <a href="#">ver clássicos ↗</a>
        </div>

        <div className="classics-board">
          <div className="map-copy">
            <span className="eyebrow">SEOUL K-DRAMA MAP</span>
            <h3>Uma pequena<br /><em>viagem no tempo.</em></h3>
            <p>Revisite histórias, casais e personagens que fizeram você se apaixonar.</p>
            <span className="map-stamp">SEOUL<br />LOVE</span>
          </div>
          <div className="classic-polaroids">
            {classics.map((item, index) => (
              <article className={`classic-card ${item.tone}`} key={item.title}>
                <span className="classic-photo">{index === 0 ? "1988" : index === 1 ? "SEOUL" : "♡"}</span>
                <strong>{item.title}</strong>
                <small>{item.label}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="category-band">
        <div className="portal-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">06 · ESCOLHA SEU HUMOR</span>
              <h2>O que você quer assistir?</h2>
            </div>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <a href="#" className={`category ${category.className}`} key={category.name}>
                <span>{category.emoji}</span>
                <b>{category.name}</b>
                <small>{category.copy}</small>
                <i>↗</i>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="portal-section reviews-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">07 · FÃS FALAM</span>
            <h2>Fan reviews <i>♡</i></h2>
          </div>
          <a href="#">ler mais ↗</a>
        </div>

        <div className="review-grid">
          <article className="review-card">
            <span className="review-avatar">🌸</span>
            <span className="stars">★★★★★</span>
            <p>&ldquo;Eu só queria assistir um episódio e agora estou emocionalmente envolvida com essa família inteira.&rdquo;</p>
            <small>— uma dorameira apaixonada</small>
          </article>
          <article className="review-card mint">
            <span className="review-avatar">🍜</span>
            <span className="stars">★★★★★</span>
            <p>&ldquo;Tem romance, comida, chuva e um protagonista bonito. Basicamente, tudo o que eu precisava.&rdquo;</p>
            <small>— oficialmente na watchlist</small>
          </article>
          <article className="review-card yellow">
            <span className="review-avatar">🎬</span>
            <span className="stars">★★★★☆</span>
            <p>&ldquo;O perigo de entrar no Seoul Bloom é sair daqui com quinze doramas para assistir.&rdquo;</p>
            <small>— não me arrependo de nada</small>
          </article>
        </div>
      </section>

      <section id="noticias" className="portal-section news-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">08 · DA COREIA PARA VOCÊ</span>
            <h2>Últimas notícias <i>✦</i></h2>
          </div>
          <a href="#">todas as notícias ↗</a>
        </div>

        <div className="news-layout">
          <article className="feature-news">
            <div className="news-art">
              <span>SEOUL</span>
              <strong>STORY</strong>
              <small>NEWS ✿</small>
            </div>
            <div className="news-copy">
              <span className="eyebrow">K-DRAMA NEWS · HOJE</span>
              <h3>As novidades que todo fã de dorama precisa conhecer esta semana.</h3>
              <p>Novidades de elenco, lançamentos, bastidores e tudo o que está movimentando o mundo dos K-Dramas.</p>
              <a href="#" className="text-link">ler matéria ↗</a>
            </div>
          </article>

          <div className="news-list">
            {news.map((item, index) => (
              <a href="#" className="news-item" key={item}>
                <span className="news-number">0{index + 1}</span>
                <div>
                  <small>NOTÍCIAS · K-DRAMA</small>
                  <h3>{item}</h3>
                </div>
                <b>↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="rankings" className="ranking-section">
        <div className="ranking-inner">
          <div className="ranking-intro">
            <span className="eyebrow">09 · FAVORITOS DO MOMENTO</span>
            <h2>Rankings que vão alimentar sua próxima <em>obsessão.</em></h2>
            <p>Listas feitas para facilitar sua próxima maratona.</p>
            <a href="#" className="button dark">ver rankings ↗</a>
          </div>
          <div className="ranking-list">
            {["Melhores romances para maratonar", "Doramas mais comentados", "K-Dramas para começar hoje"].map((item, index) => (
              <a href="#" className="rank-row" key={item}>
                <strong>0{index + 1}</strong>
                <span>{item}</span>
                <b>✿</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="guias" className="guide-section">
        <span className="guide-flower">🌸</span>
        <span className="guide-film">🎞️</span>
        <span className="eyebrow">10 · GUIAS SEOUL BLOOM</span>
        <h2>Seu mapa para o<br /><em>universo dos doramas.</em></h2>
        <p>Onde assistir, por onde começar, listas especiais e muito mais.</p>
        <a href="#" className="button">explorar guias ↗</a>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <span>🌸 SEOUL <b>BLOOM</b></span>
          <small>♡ made for K-drama lovers</small>
        </div>
        <div>
          <small>EXPLORE</small>
          <a href="#doramas">Doramas</a>
          <a href="#conheca-korea">Conheça a Korea</a>
          <a href="#atores">Atores</a>
          <a href="#noticias">Notícias</a>
        </div>
        <div>
          <small>DESCUBRA</small>
          <a href="#rankings">Rankings</a>
          <a href="#guias">Guias</a>
          <a href="#">Sobre o Seoul Bloom</a>
        </div>
        <div className="footer-korean">
          서울
          <span>사랑해 ♡</span>
          <small>see you in Seoul</small>
        </div>
      </footer>
    </main>
  );
}
