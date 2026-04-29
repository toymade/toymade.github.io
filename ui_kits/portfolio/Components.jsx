// TOYMADE Portfolio — Components
const { useState, useEffect, useRef } = React;

function Cursor() {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState("");
  useEffect(() => {
    const onMove = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top  = e.clientY + "px";
      }
    };
    const onOver = (e) => {
      const t = e.target.closest("[data-cursor]");
      if (t) { setHover(true); setLabel(t.getAttribute("data-cursor") || ""); }
      else { setHover(false); setLabel(""); }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseover", onOver); };
  }, []);
  return (
    <div ref={ref} className={"tm-cursor" + (hover ? " is-hover" : "")}>
      <span className="tm-cursor-label">{label}</span>
    </div>
  );
}

function Nav({ active = "work", onNav }) {
  const items = ["work", "lab", "journal", "about", "contact"];
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  const go = (v) => { setOpen(false); onNav && onNav(v); };
  return (
    <>
      <div className="tm-topbar">
        <div className="item"><span className="dot"></span>Open · 9–5 · Mon–Fri</div>
        <div className="item">Lisbon · Berlin · GMT+1</div>
        <div className="item">hi@toymade.studio</div>
      </div>
      <nav className="tm-nav">
        <div className="logo" data-cursor="home" onClick={() => onNav && onNav("home")}>
          <img src="../../assets/toymade_logo_black.png" alt="tm"/>
        </div>
        <div className="tm-nav-bar">
          <ul className="tm-nav-links">
            {items.map(i => (
              <li key={i}><a className={active === i ? "active" : ""} data-cursor="" onClick={() => onNav && onNav(i)}>{i}</a></li>
            ))}
          </ul>
        </div>
      </nav>
      <button className={"tm-burger" + (open ? " is-open" : "")} onClick={() => setOpen(!open)} aria-label="Menu">
        <span className="bars"><span></span><span></span><span></span></span>
      </button>
      <div className={"tm-mobile-menu" + (open ? " is-open" : "")}>
        {items.map(i => (
          <a key={i} onClick={() => go(i)}>{i}<span style={{color:"var(--tm-red)"}}>.</span></a>
        ))}
        <div className="foot">
          <span>Open · 9–5 · Mon–Fri</span>
          <span>hi@toymade.studio</span>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="tm-hero">
      <div className="tm-hero-eyebrow">— Independent design + code studio · Est. 2019</div>
      <h1>
        We make<br/>
        <span className="out">soft</span> machines<br/>
        for the <span className="red">web.</span>
      </h1>
      <div className="tm-hero-foot">
        <div><div className="lbl">Based</div><div className="val">Lisbon · Berlin</div></div>
        <div><div className="lbl">Discipline</div><div className="val">Brand · Web · 3D</div></div>
        <div><div className="lbl">Available from</div><div className="val">May 2025</div></div>
        <div><div className="lbl">Contact</div><div className="val">hi@toymade.studio</div></div>
      </div>
    </section>
  );
}

function Marquee({ items }) {
  const list = [...items, ...items, ...items];
  return (
    <div className="tm-marquee">
      <div className="track">
        {list.map((t, i) => (
          <span key={i}>{t}<span className="dot"></span></span>
        ))}
      </div>
    </div>
  );
}

function WorkRow({ num, title, tags, year, onClick }) {
  return (
    <div className="tm-work-row" data-cursor="open" onClick={onClick}>
      <div className="tm-work-num">{num}</div>
      <div className="tm-work-title">{title}</div>
      <div className="tm-work-tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
      <div className="tm-work-year">{year}</div>
      <div className="tm-work-arrow">→</div>
    </div>
  );
}

function WorkList({ projects, onOpen }) {
  return (
    <section className="tm-section">
      <div className="tm-section-head">
        <span className="eyebrow">Selected work · 24 projects</span>
        <h2>Index<span style={{color:"var(--tm-red)"}}>.</span></h2>
      </div>
      <div>
        {projects.map((p, i) => (
          <WorkRow key={p.id}
            num={String(i+1).padStart(3,"0")}
            title={p.title} tags={p.tags} year={p.year}
            onClick={() => onOpen(p)} />
        ))}
      </div>
    </section>
  );
}

function GridCard({ p, big, image, onOpen }) {
  const innerStyle = image ? { backgroundImage: `url(${image})` } : null;
  return (
    <div className="tm-grid-card" data-cursor="view" onClick={() => onOpen && onOpen(p)} style={big ? { gridColumn: "1 / -1" } : {}}>
      <div className="tm-grid-thumb">
        {image ? (
          <div className="inner" style={innerStyle}></div>
        ) : (
          <div className="inner placeholder">
            <div className="placeholder-note">Drop image — {p.title}</div>
          </div>
        )}
        {image && <div className="label">{p.short || p.title}</div>}
      </div>
      <div className="tm-grid-meta">
        <div className="ttl">{p.title}</div>
        <div className="yr">{p.discipline} · {p.year}</div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="tm-about">
      <div className="grid">
        <h2>About<br/><em>the studio</em></h2>
        <div>
          <p>
            Toymade is a two-person studio building <span className="accent">unreasonably crafted</span> digital
            interfaces — for brands that care about typography, motion, and the silence between elements.
          </p>
          <p style={{marginTop:"24px", fontSize:"15px", color:"#888", maxWidth:"50ch", lineHeight:"1.7"}}>
            We believe in restraint, heavy type, and the <span className="accent">value of negative space</span>. Every
            project starts on paper, gets sketched in code, and ends with a thing you can press, drag, and feel.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="tm-footer">
      <div className="row1">
        <h2>Got a brief<span className="red">?</span><br/>Let's talk.</h2>
        <div className="tm-footer-links">
          <div style={{fontSize:"10px",letterSpacing:"0.18em",textTransform:"uppercase",color:"#888",fontWeight:600,marginBottom:"4px"}}>Studio</div>
          <a data-cursor="">hi@toymade.studio</a>
          <a data-cursor="">+351 — on request</a>
          <a data-cursor="">@toymade.studio</a>
        </div>
        <div className="tm-footer-links">
          <div style={{fontSize:"10px",letterSpacing:"0.18em",textTransform:"uppercase",color:"#888",fontWeight:600,marginBottom:"4px"}}>Elsewhere</div>
          <a data-cursor="">Are.na</a>
          <a data-cursor="">Read.cv</a>
          <a data-cursor="">Github</a>
        </div>
      </div>
      <div className="tm-footer-bottom">
        <div className="meta">© 2019–2025 Toymade Studio</div>
        <div className="meta">Made by hand</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Cursor, Nav, Hero, Marquee, WorkRow, WorkList, GridCard, About, Footer });
