const dramas = [
  { title: "When the Spring Comes", meta: "Romance • 2026", tone: "pink", emoji: "🌸" },
  { title: "Seoul After Rain", meta: "Romance • Drama", tone: "blue", emoji: "☔" },
  { title: "Our Little Recipe", meta: "Comédia • Romance", tone: "cream", emoji: "🍜" },
  { title: "Moonlight Contract", meta: "Fantasia • Romance", tone: "green", emoji: "🌙" },
];

const news = [
  "Os 10 doramas que estão dominando as conversas",
  "Novos lançamentos para colocar na sua lista",
  "Onde assistir aos principais K-Dramas da semana",
];

function DramaCard({ drama }: { drama: typeof dramas[number] }) {
  return (
    <article className={`drama-card ${drama.tone}`}>
      <div className="card-art">
        <span className="sticker">{drama.emoji}</span>
        <span className="mini-label">K-DRAMA</span>
        <div className="fake-poster">
          <span>{drama.title.split(" ")[0]}</span>
          <strong>{drama.title.split(" ").slice(1).join(" ")}</strong>
        </div>
        <span className="heart">♡</span>
      </div>
      <div className="card-copy">
        <h3>{drama.title}</h3>
        <p>{drama.meta}</p>
        <span className="rating">★ 9.0</span>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <div className="top-note">서울 · K-DRAMA · 사랑해 · SEOUL · 🌸</div>

      <header className="header">
        <a className="brand" href="#">
          <span className="brand-flower">✿</span>
          <span>
            <small>THE K-DRAMA JOURNAL</small>
            SEOUL<span>BLOOM</span>
          </span>
        </a>

        <nav>
          <a href="#">Início</a>
          <a href="#doramas">Doramas</a>
          <a href="#noticias">Notícias</a>
          <a href="#rankings">Rankings</a>
          <a href="#guias">Guias</a>
        </nav>

        <button className="search" aria-label="Pesquisar">⌕</button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">✦ DORAMA DA SEMANA ✦</span>
          <h1>Um cantinho para quem <em>ama</em> K-Dramas.</h1>
          <p>
            Descubra histórias para maratonar, novidades da Coreia, rankings,
            personagens favoritos e aquele próximo dorama que vai virar sua obsessão.
          </p>
          <div className="hero-actions">
            <a href="#doramas" className="button">Explorar doramas ↗</a>
            <span className="scribble">사랑해 ♡</span>
          </div>
        </div>

        <div className="hero-collage">
          <div className="hero-photo">
            <span className="photo-sun">☀</span>
            <span className="photo-title">SEOUL<br /><b>MEMORIES</b></span>
            <span className="photo-stamp">K-DRAMA<br />2026</span>
          </div>
          <span className="hero-sticker sticker-one">🌸</span>
          <span className="hero-sticker sticker-two">♡</span>
          <span className="hero-sticker sticker-three">🎬</span>
          <span className="tape"></span>
        </div>
      </section>

      <section className="marquee">
        <span>🌸 NEW IN SEOUL</span><span>♡ K-DRAMA</span><span>🍜 WATCH LIST</span>
        <span>✿ 사랑해</span><span>🎬 LET&apos;S WATCH</span>
      </section>

      <section id="doramas" className="section">
        <div className="section-heading">
          <div><span className="eyebrow">01 · PARA COMEÇAR</span><h2>Em alta agora <i>♡</i></h2></div>
          <a href="#">Ver todos ↗</a>
        </div>
        <div className="card-grid">
          {dramas.map((drama) => <DramaCard key={drama.title} drama={drama} />)}
        </div>
      </section>

      <section className="category-band">
        <div className="section-heading">
          <div><span className="eyebrow">02 · ESCOLHA SEU HUMOR</span><h2>O que você quer assistir?</h2></div>
        </div>
        <div className="category-grid">
          <a href="#" className="category romance"><span>🌸</span><b>Romance</b><small>borboletas no estômago</small></a>
          <a href="#" className="category comedy"><span>🍜</span><b>Comédia</b><small>para rir e relaxar</small></a>
          <a href="#" className="category fantasy"><span>🌙</span><b>Fantasia</b><small>um pouco de magia</small></a>
          <a href="#" className="category thriller"><span>🎞️</span><b>Suspense</b><small>não pisque</small></a>
        </div>
      </section>

      <section id="noticias" className="section news-section">
        <div className="section-heading">
          <div><span className="eyebrow">03 · DA COREIA PARA VOCÊ</span><h2>Últimas notícias <i>✦</i></h2></div>
          <a href="#">Todas as notícias ↗</a>
        </div>
        <div className="news-layout">
          <article className="feature-news">
            <div className="news-art">SEOUL<br /><strong>STORY</strong><span>NEWS ✿</span></div>
            <span className="eyebrow">K-DRAMA NEWS · HOJE</span>
            <h3>As novidades que todo fã de dorama precisa conhecer esta semana.</h3>
            <p>Um espaço editorial para notícias, novidades de elenco e lançamentos.</p>
          </article>
          <div className="news-list">
            {news.map((item, i) => (
              <a href="#" className="news-item" key={item}>
                <span>0{i + 1}</span><div><small>NOTÍCIAS · K-DRAMA</small><h3>{item}</h3></div><b>↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="rankings" className="ranking">
        <div className="ranking-inner">
          <div>
            <span className="eyebrow">04 · FAVORITOS DO MOMENTO</span>
            <h2>Rankings<br /><em>♡</em> que você vai querer conferir.</h2>
            <p>Listas feitas para facilitar sua próxima maratona.</p>
            <a href="#" className="button dark">Ver rankings ↗</a>
          </div>
          <div className="ranking-list">
            {["Melhores romances para maratonar", "Doramas mais comentados", "K-Dramas para começar hoje"].map((x, i) => (
              <div className="rank-row" key={x}><strong>0{i + 1}</strong><span>{x}</span><b>✿</b></div>
            ))}
          </div>
        </div>
      </section>

      <section id="guias" className="guide">
        <span className="guide-flower">🌸</span>
        <span className="eyebrow">05 · GUIAS</span>
        <h2>Seu mapa para o<br /><em>universo dos doramas.</em></h2>
        <p>Onde assistir, por onde começar, listas especiais e muito mais.</p>
        <a href="#" className="button">Explorar guias ↗</a>
      </section>

      <footer className="footer">
        <div className="footer-brand">SEOUL<span>BLOOM</span><small>♡ made for K-drama lovers</small></div>
        <div><small>EXPLORE</small><a href="#">Doramas</a><a href="#">Notícias</a><a href="#">Rankings</a></div>
        <div><small>SITE</small><a href="#">Sobre nós</a><a href="#">Contato</a><a href="#">Privacidade</a></div>
        <div className="footer-korean">서울<br /><span>사랑해</span> ♡</div>
      </footer>
    </main>
  );
}