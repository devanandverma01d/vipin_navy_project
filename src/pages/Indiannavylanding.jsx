import { useState } from "react";

const officers = [
  { name: "Adm. R. Hari Kumar", rank: "Chief of Naval Staff", init: "RH", col: "#1a3a5c" },
  { name: "VAdm. S.N. Ghormade", rank: "Vice Chief of Naval Staff", init: "SG", col: "#0e4d6e" },
  { name: "VAdm. A.K. Chawla", rank: "FO C-in-C West", init: "AK", col: "#1b5e7b" },
  { name: "VAdm. B. Dasgupta", rank: "FO C-in-C East", init: "BD", col: "#164e6f" },
  { name: "VAdm. M.A. Hampiholi", rank: "FO C-in-C South", init: "MH", col: "#0d3d58" },
  { name: "RAdm. V.K. Saxena", rank: "DG Naval Ops", init: "VK", col: "#12506a" },
];

const fleetData = [
  { icon: "🛥️", count: 2, name: "CARRIERS" },
  { icon: "⚔️", count: 11, name: "DESTROYERS" },
  { icon: "🚢", count: 13, name: "FRIGATES" },
  { icon: "🔱", count: 16, name: "SUBMARINES" },
  { icon: "⚓", count: 22, name: "CORVETTES" },
  { icon: "🌊", count: 48, name: "PATROL" },
];

const operations = [
  { badge: "ACTIVE", name: "Op Sankalp", desc: "Safe passage in Red Sea & Gulf of Aden against piracy." },
  { badge: "ONGOING", name: "Ex MALABAR", desc: "Trilateral drill with US & Japan in Indo-Pacific." },
  { badge: "ACTIVE", name: "HADR Ops", desc: "Disaster relief across Indian Ocean Region." },
];

const leftSidebar = [
  { icon: "🏛️", label: "Naval History" },
  { icon: "⚓", label: "Ship Registry" },
  { icon: "🎖️", label: "Awards" },
  { icon: "🗺️", label: "Maritime Zones" },
  { icon: "📜", label: "Naval Doctrine" },
  { icon: "🔭", label: "R&D Wing" },
];

const rightSidebar = [
  { icon: "📋", label: "Quick Apply" },
  { icon: "📞", label: "Helpdesk" },
  { icon: "📰", label: "Press Room" },
  { icon: "🌐", label: "INS Portal" },
  { icon: "📊", label: "RTI Cell" },
  { icon: "🔔", label: "Alerts" },
];

const marqueeItems = [
  "🚢 INS Vikrant completes advanced sea trials in Arabian Sea",
  "⚓ Indian Navy signs MoU with Japan MSDF for strategic cooperation",
  "🛡️ Exercise MALABAR 2024 concludes with enhanced interoperability",
  "📢 Sailor recruitment open – Apply before 30 June 2024",
  "🌊 Operation Sankalp ensures safe passage in Red Sea",
  "🏆 Indian Navy wins Inter-Services Athletics Championship",
  "🚁 P-8I Poseidon fleet hits 10,000 flight hours milestone",
  "⚔️ INS Mormugao test fires BrahMos supersonic cruise missile",
];

export default function IndianNavyNoScroll() {
  const [leftHovered, setLeftHovered] = useState(false);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        gridTemplateRows: "auto auto 1fr",
        gridTemplateColumns: "44px 1fr",  // ← only 2 cols; right sidebar is position:fixed
        overflow: "hidden",
        background: "#020d1a",
        color: "#fff",
        fontFamily: "'Rajdhani', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Rajdhani:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body, html { overflow: hidden; height: 100%; }

        .gold { background: linear-gradient(90deg,#c9a84c,#f0d080,#c9a84c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .cinzel { font-family: 'Cinzel', serif; }

        .nav-link { position: relative; padding-bottom: 2px; cursor: pointer; color: #cdd9e5; font-family: 'Rajdhani', sans-serif; font-weight: 600; font-size: 12px; letter-spacing: .8px; transition: color .2s; }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: #c9a84c; transition: width .3s; }
        .nav-link:hover { color: #f0d080; }
        .nav-link:hover::after { width: 100%; }

        .marquee-track { display: flex; width: max-content; animation: mq 48s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes mq { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        .sidebar-item { display: flex; align-items: center; gap: 9px; padding: 9px 12px; cursor: pointer; white-space: nowrap; border-bottom: 1px solid rgba(201,168,76,0.1); transition: background .2s; flex-shrink: 0; }
        .sidebar-item:last-child { border-bottom: none; }
        .sidebar-item:hover { background: rgba(201,168,76,0.14); }

        .fleet-card { text-align: center; padding: 4px 6px; transition: transform .2s; cursor: pointer; }
        .fleet-card:hover { transform: translateY(-3px); }

        .op-card { padding: 4px 10px; cursor: pointer; }
        .op-card:hover .op-name { color: #f0d080; }

        .btn-primary { padding: 9px 22px; border-radius: 3px; background: linear-gradient(90deg,#c9a84c,#e8c45a); color: #0a1628; font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 2px; cursor: pointer; border: none; transition: transform .2s; }
        .btn-primary:hover { transform: translateY(-2px); }
        .btn-secondary { padding: 9px 22px; border-radius: 3px; background: transparent; border: 1px solid #c9a84c; color: #c9a84c; font-family: 'Rajdhani', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 2px; cursor: pointer; transition: all .2s; }
        .btn-secondary:hover { background: rgba(201,168,76,0.1); }

        .orbit-r1 { position: absolute; inset: 0; border-radius: 50%; border: 1px dashed rgba(201,168,76,0.2); animation: spin 22s linear infinite; }
        .orbit-r2 { position: absolute; inset: 22px; border-radius: 50%; border: 1px dashed rgba(201,168,76,0.11); animation: spin 34s linear infinite reverse; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .officer-dot { position: absolute; width: 50px; height: 50px; border-radius: 50%; cursor: pointer; transition: transform .3s; z-index: 1; }
        .officer-dot:hover { transform: scale(1.25); z-index: 10; }
        .officer-avatar { width: 100%; height: 100%; border-radius: 50%; border: 2px solid #c9a84c; display: flex; align-items: center; justify-content: center; font-family: 'Cinzel', serif; font-weight: 700; font-size: 11px; color: #fff; }
        .officer-tip { position: absolute; bottom: -46px; left: 50%; transform: translateX(-50%); background: rgba(6,14,30,0.97); border: 1px solid #c9a84c; border-radius: 4px; padding: 3px 8px; font-family: 'Rajdhani', sans-serif; font-size: 10px; white-space: nowrap; pointer-events: none; opacity: 0; transition: opacity .2s; z-index: 20; text-align: center; }
        .officer-dot:hover .officer-tip { opacity: 1; }

        @keyframes pulseRing { 0% { transform: translate(-50%,-50%) scale(.9); opacity:.7; } 100% { transform: translate(-50%,-50%) scale(1.2); opacity:0; } }

        /* ── RIGHT SIDEBAR — fixed to viewport right edge, expands OUTWARD (leftward) ── */
        .right-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 44px;
          overflow: hidden;
          background: rgba(8,18,34,0.96);
          border-left: 1px solid rgba(201,168,76,0.22);
          border-radius: 8px 0 0 8px;
          transition: width .3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 100;
        }
        .right-sidebar:hover {
          width: 154px;
        }
        .right-sidebar .sidebar-item {
          flex-direction: row-reverse;
          justify-content: flex-start;
        }
        .right-sidebar .sidebar-label {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 12px;
          color: #c9a84c;
          opacity: 0;
          transition: opacity .2s .08s;
          white-space: nowrap;
        }
        .right-sidebar:hover .sidebar-label {
          opacity: 1;
        }
      `}</style>

      {/* ── NAVBAR (full width, row 1) ── */}
      <nav
        style={{
          gridColumn: "1 / -1",
          gridRow: 1,
          background: "rgba(10,22,40,0.98)",
          borderBottom: "1px solid rgba(201,168,76,0.35)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 20px", borderBottom: "1px solid rgba(201,168,76,0.15)", fontSize: 11, color: "#8aafc5", letterSpacing: ".5px" }}>
          <span>भारतीय नौसेना &nbsp;·&nbsp; Indian Navy &nbsp;·&nbsp; Est. 1612</span>
          <div style={{ display: "flex", gap: 18 }}>
            {["Tenders", "RTI", "Media", "हिन्दी"].map((t) => (
              <span key={t} style={{ cursor: "pointer", transition: "color .2s" }}
                onMouseEnter={e => e.target.style.color = "#c9a84c"}
                onMouseLeave={e => e.target.style.color = "#8aafc5"}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#1a3a5c,#0d2b4e)", border: "2px solid #c9a84c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>⚓</div>
            <div>
              <div className="cinzel gold" style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.2 }}>INDIAN NAVY</div>
              <div style={{ fontSize: 9, color: "#c9a84c", letterSpacing: 3 }}>BHARATIYA NAUSENA</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {["Home", "About", "Fleet", "Operations", "Recruitment", "News", "Gallery", "Contact"].map((l) => (
              <span key={l} className="nav-link">{l}</span>
            ))}
          </div>
          <button className="btn-primary">JOIN NAVY</button>
        </div>
      </nav>

      {/* ── MARQUEE (full width, row 2) ── */}
      <div
        style={{
          gridColumn: "1 / -1",
          gridRow: 2,
          background: "linear-gradient(90deg,#060f1e,#0d2040,#060f1e)",
          borderBottom: "1px solid rgba(201,168,76,0.25)",
          display: "flex",
          alignItems: "center",
          height: 28,
          overflow: "hidden",
        }}
      >
        <div style={{ background: "#c9a84c", color: "#0a1628", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: 2, padding: "0 10px", height: "100%", display: "flex", alignItems: "center", flexShrink: 0 }}>
          LATEST
        </div>
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{ fontSize: 11, color: "#c9a84c", padding: "0 5px", whiteSpace: "nowrap" }}>
                {item} &nbsp;|&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── LEFT SIDEBAR (col 1, row 3) ── */}
      <div
        onMouseEnter={() => setLeftHovered(true)}
        onMouseLeave={() => setLeftHovered(false)}
        style={{
          gridColumn: 1,
          gridRow: 3,
          width: leftHovered ? 154 : 44,
          overflow: "hidden",
          background: "rgba(8,18,34,0.96)",
          border: "1px solid rgba(201,168,76,0.22)",
          borderLeft: "none",
          borderRadius: "0 8px 8px 0",
          transition: "width .3s ease",
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
        }}
      >
        {leftSidebar.map((item, i) => (
          <div key={i} className="sidebar-item">
            <span style={{ fontSize: 17, flexShrink: 0, width: 18, textAlign: "center" }}>{item.icon}</span>
            <span style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 600, fontSize: 12, color: "#c9a84c", opacity: leftHovered ? 1 : 0, transition: "opacity .2s .08s", whiteSpace: "nowrap" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── MAIN CONTENT (col 2, row 3) ── */}
      <div
        style={{
          gridColumn: 2,
          gridRow: 3,
          overflow: "hidden",
          display: "grid",
          gridTemplateRows: "1fr auto",
          background: "linear-gradient(160deg,#020d1a 0%,#0a1628 40%,#0d2b4e 75%,#064663 100%)",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none" }} />

        {[220, 340, 460].map((size, i) => (
          <div key={i} style={{ position: "absolute", top: "50%", left: "36%", transform: "translate(-50%,-50%)", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.1)", animation: `pulseRing ${3.5 + i}s ease-out infinite`, animationDelay: `${i * 0.7}s`, pointerEvents: "none" }} />
        ))}

        {/* Hero Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 36px", position: "relative", zIndex: 2 }}>
          <div style={{ flex: 1, maxWidth: 380 }}>
            <div style={{ fontSize: 10, color: "#c9a84c", letterSpacing: 3, marginBottom: 10 }}>
              ॥ शं नो वरुणः ॥ — MAY VARUNA BE AUSPICIOUS
            </div>
            <h1 className="cinzel gold" style={{ fontWeight: 700, fontSize: "2.4rem", lineHeight: 1.1, marginBottom: 6 }}>
              INDIAN<br />NAVY
            </h1>
            <div style={{ fontSize: 11, color: "#90afc5", letterSpacing: 5, marginBottom: 10 }}>PRIDE · POWER · PROTECTION</div>
            <p style={{ fontSize: 13, color: "#7a9bb5", lineHeight: 1.6, marginBottom: 18, maxWidth: 320 }}>
              Safeguarding India's maritime interests, ensuring regional stability and projecting strategic power across the Indo-Pacific.
            </p>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <button className="btn-primary">EXPLORE FLEET</button>
              <button className="btn-secondary">JOIN NAVY</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, borderTop: "1px solid rgba(201,168,76,0.2)", paddingTop: 14 }}>
              {[["130+", "WARSHIPS"], ["16+", "SUBMARINES"], ["200+", "AIRCRAFT"], ["67K+", "PERSONNEL"]].map(([n, l]) => (
                <div key={l}>
                  <div className="cinzel" style={{ fontSize: "1.3rem", fontWeight: 700, color: "#c9a84c" }}>{n}</div>
                  <div style={{ fontSize: 9, color: "#7a9bb5", letterSpacing: 1.5, marginTop: 1 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", width: 260, height: 260, flexShrink: 0 }}>
            <div className="orbit-r1" />
            <div className="orbit-r2" />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 68, height: 68, borderRadius: "50%", background: "linear-gradient(135deg,#1a3a5c,#0d2b4e)", border: "2px solid #c9a84c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, boxShadow: "0 0 20px rgba(201,168,76,0.25)" }}>⚓</div>
            {officers.map((o, i) => {
              const R = 98, cx = 130, cy = 130;
              const angle = (i / officers.length) * 2 * Math.PI - Math.PI / 2;
              const x = cx + R * Math.cos(angle) - 25;
              const y = cy + R * Math.sin(angle) - 25;
              return (
                <div key={i} className="officer-dot" style={{ left: x, top: y }}>
                  <div className="officer-avatar" style={{ background: `linear-gradient(135deg,${o.col},#0d2b4e)` }}>{o.init}</div>
                  <div className="officer-tip">
                    <div style={{ color: "#c9a84c", fontWeight: 700, fontSize: 10 }}>{o.name}</div>
                    <div style={{ color: "#7a9bb5", fontSize: 9 }}>{o.rank}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr) 2px repeat(3,1fr)", gap: 0, borderTop: "1px solid rgba(201,168,76,0.2)", background: "rgba(6,14,28,0.9)", padding: "10px 16px", alignItems: "center", position: "relative", zIndex: 2 }}>
          {fleetData.map((f) => (
            <div key={f.name} className="fleet-card">
              <div style={{ fontSize: 18, marginBottom: 2 }}>{f.icon}</div>
              <div className="cinzel" style={{ fontSize: "1rem", fontWeight: 700, color: "#c9a84c" }}>{f.count}</div>
              <div style={{ fontSize: 9, color: "#90afc5", letterSpacing: ".8px" }}>{f.name}</div>
            </div>
          ))}
          <div style={{ background: "rgba(201,168,76,0.25)", width: 1, height: 60, margin: "0 auto" }} />
          {operations.map((op) => (
            <div key={op.name} className="op-card">
              <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: "1.5px", padding: "2px 7px", borderRadius: 3, background: "rgba(201,168,76,0.12)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.28)", display: "inline-block", marginBottom: 4 }}>{op.badge}</span>
              <div className="cinzel op-name" style={{ fontSize: 11, color: "#d4b85a", marginBottom: 2 }}>{op.name}</div>
              <div style={{ fontSize: 10, color: "#7a9bb5", lineHeight: 1.4 }}>{op.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT SIDEBAR — position:fixed, expands OUTWARD (leftward) via CSS :hover ── */}
      <div className="right-sidebar">
        {rightSidebar.map((item, i) => (
          <div key={i} className="sidebar-item">
            <span style={{ fontSize: 17, flexShrink: 0, width: 18, textAlign: "center" }}>{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
}