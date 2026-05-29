import { useState } from "react";

const navLinks = [
  { label: "Home", page: "Home" },
  { label: "About", page: "About" },
  { label: "Fleet", page: "Fleet" },
  { label: "Operations", page: "Operations" },
  { label: "Recruitment", page: "Recruitment" },
  { label: "News", page: "News" },
  { label: "Gallery", page: "Gallery" },
  { label: "Contact", page: "Contact" },
];

const leftLinks = [
  { icon: "🏛️", label: "Naval History", page: "NavalHistory" },
  { icon: "⚓", label: "Ship Registry", page: "ShipRegistry" },
  { icon: "🎖️", label: "Awards", page: "Awards" },
  { icon: "🗺️", label: "Maritime Zones", page: "MaritimeZones" },
  { icon: "📜", label: "Naval Doctrine", page: "NavalDoctrine" },
  { icon: "🔭", label: "R&D Wing", page: "RDWing" },
];

const rightLinks = [
  { icon: "📋", label: "Quick Apply", page: "QuickApply" },
  { icon: "📞", label: "Helpdesk", page: "Helpdesk" },
  { icon: "📰", label: "Press Room", page: "PressRoom" },
  { icon: "🌐", label: "INS Portal", page: "INSPortal" },
  { icon: "📊", label: "RTI Cell", page: "RTICell" },
  { icon: "🔔", label: "Alerts", page: "Alerts" },
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

export default function Layout({ activePage, setActivePage, children }) {
  const [leftHovered, setLeftHovered] = useState(false);

  return (
    <div style={{
      width: "100vw", height: "100vh",
      display: "grid",
      gridTemplateRows: "auto auto 1fr",
      gridTemplateColumns: "44px 1fr",
      overflow: "hidden",
      background: "#020d1a",
      color: "#fff",
      fontFamily: "'Rajdhani', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Rajdhani:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body, html { overflow: hidden; height: 100%; }

        .gold { background: linear-gradient(90deg,#c9a84c,#f0d080,#c9a84c); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .cinzel { font-family:'Cinzel',serif; }

        .nav-link { position:relative; padding-bottom:2px; cursor:pointer; color:#cdd9e5; font-family:'Rajdhani',sans-serif; font-weight:600; font-size:12px; letter-spacing:.8px; transition:color .2s; }
        .nav-link::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px; background:#c9a84c; transition:width .3s; }
        .nav-link:hover,.nav-link.active { color:#f0d080; }
        .nav-link:hover::after,.nav-link.active::after { width:100%; }

        .marquee-track { display:flex; width:max-content; animation:mq 48s linear infinite; }
        .marquee-track:hover { animation-play-state:paused; }
        @keyframes mq { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        .sidebar-item { display:flex; align-items:center; gap:9px; padding:9px 12px; cursor:pointer; white-space:nowrap; border-bottom:1px solid rgba(201,168,76,0.1); transition:background .2s; flex-shrink:0; }
        .sidebar-item:last-child { border-bottom:none; }
        .sidebar-item:hover { background:rgba(201,168,76,0.14); }
        .sidebar-item.active { background:rgba(201,168,76,0.2); }

        .btn-primary { padding:9px 22px; border-radius:3px; background:linear-gradient(90deg,#c9a84c,#e8c45a); color:#0a1628; font-family:'Rajdhani',sans-serif; font-weight:700; font-size:11px; letter-spacing:2px; cursor:pointer; border:none; transition:transform .2s; }
        .btn-primary:hover { transform:translateY(-2px); }

        /* RIGHT SIDEBAR — fixed, expands outward (leftward) */
        .right-sidebar {
          position:fixed; top:0; right:0; height:100vh; width:44px;
          overflow:hidden;
          background:rgba(8,18,34,0.96);
          border-left:1px solid rgba(201,168,76,0.22);
          border-radius:8px 0 0 8px;
          transition:width .3s ease;
          display:flex; flex-direction:column; justify-content:center;
          z-index:100;
        }
        .right-sidebar:hover { width:154px; }
        .right-sidebar .sidebar-item { flex-direction:row-reverse; justify-content:flex-start; }
        .right-sidebar .sidebar-label { font-family:'Rajdhani',sans-serif; font-weight:600; font-size:12px; color:#c9a84c; opacity:0; transition:opacity .2s .08s; white-space:nowrap; }
        .right-sidebar:hover .sidebar-label { opacity:1; }

        /* Page content scrollable */
        .page-scroll { overflow-y:auto; height:100%; }
        .page-scroll::-webkit-scrollbar { width:4px; }
        .page-scroll::-webkit-scrollbar-track { background:rgba(255,255,255,0.03); }
        .page-scroll::-webkit-scrollbar-thumb { background:rgba(201,168,76,0.3); border-radius:2px; }

        @keyframes fadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .page-enter { animation:fadeIn .35s ease forwards; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ gridColumn:"1 / -1", gridRow:1, background:"rgba(10,22,40,0.98)", borderBottom:"1px solid rgba(201,168,76,0.35)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"4px 20px", borderBottom:"1px solid rgba(201,168,76,0.15)", fontSize:11, color:"#8aafc5", letterSpacing:".5px" }}>
          <span>भारतीय नौसेना &nbsp;·&nbsp; Indian Navy &nbsp;·&nbsp; Est. 1612</span>
          <div style={{ display:"flex", gap:18 }}>
            {["Tenders","RTI","Media","हिन्दी"].map(t => (
              <span key={t} style={{ cursor:"pointer", transition:"color .2s" }}
                onMouseEnter={e=>e.target.style.color="#c9a84c"}
                onMouseLeave={e=>e.target.style.color="#8aafc5"}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 20px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer" }} onClick={() => setActivePage("Home")}>
            <div style={{ width:38, height:38, borderRadius:"50%", background:"linear-gradient(135deg,#1a3a5c,#0d2b4e)", border:"2px solid #c9a84c", display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }}>⚓</div>
            <div>
              <div className="cinzel gold" style={{ fontWeight:700, fontSize:15, lineHeight:1.2 }}>INDIAN NAVY</div>
              <div style={{ fontSize:9, color:"#c9a84c", letterSpacing:3 }}>BHARATIYA NAUSENA</div>
            </div>
          </div>
          <div style={{ display:"flex", gap:16 }}>
            {navLinks.map(l => (
              <span key={l.page}
                className={`nav-link${activePage === l.page ? " active" : ""}`}
                onClick={() => setActivePage(l.page)}>{l.label}</span>
            ))}
          </div>
          <button className="btn-primary" onClick={() => setActivePage("Recruitment")}>JOIN NAVY</button>
        </div>
      </nav>

      {/* MARQUEE */}
      <div style={{ gridColumn:"1 / -1", gridRow:2, background:"linear-gradient(90deg,#060f1e,#0d2040,#060f1e)", borderBottom:"1px solid rgba(201,168,76,0.25)", display:"flex", alignItems:"center", height:28, overflow:"hidden" }}>
        <div style={{ background:"#c9a84c", color:"#0a1628", fontFamily:"'Rajdhani',sans-serif", fontWeight:700, fontSize:10, letterSpacing:2, padding:"0 10px", height:"100%", display:"flex", alignItems:"center", flexShrink:0 }}>LATEST</div>
        <div style={{ overflow:"hidden", flex:1 }}>
          <div className="marquee-track">
            {[...marqueeItems,...marqueeItems].map((item,i) => (
              <span key={i} style={{ fontSize:11, color:"#c9a84c", padding:"0 5px", whiteSpace:"nowrap" }}>{item} &nbsp;|&nbsp;</span>
            ))}
          </div>
        </div>
      </div>

      {/* LEFT SIDEBAR */}
      <div
        onMouseEnter={() => setLeftHovered(true)}
        onMouseLeave={() => setLeftHovered(false)}
        style={{ gridColumn:1, gridRow:3, width:leftHovered?154:44, overflow:"hidden", background:"rgba(8,18,34,0.96)", border:"1px solid rgba(201,168,76,0.22)", borderLeft:"none", borderRadius:"0 8px 8px 0", transition:"width .3s ease", display:"flex", flexDirection:"column", zIndex:10 }}
      >
        {leftLinks.map((item) => (
          <div key={item.page}
            className={`sidebar-item${activePage===item.page?" active":""}`}
            onClick={() => setActivePage(item.page)}>
            <span style={{ fontSize:17, flexShrink:0, width:18, textAlign:"center" }}>{item.icon}</span>
            <span style={{ fontFamily:"'Rajdhani',sans-serif", fontWeight:600, fontSize:12, color:"#c9a84c", opacity:leftHovered?1:0, transition:"opacity .2s .08s", whiteSpace:"nowrap" }}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div style={{ gridColumn:2, gridRow:3, overflow:"hidden", background:"linear-gradient(160deg,#020d1a 0%,#0a1628 40%,#0d2b4e 75%,#064663 100%)", position:"relative" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px)", backgroundSize:"44px 44px", pointerEvents:"none", zIndex:0 }} />
        <div className="page-scroll page-enter" key={activePage} style={{ position:"relative", zIndex:1 }}>
          {children}
        </div>
      </div>

      {/* RIGHT SIDEBAR — fixed, expands outward */}
      <div className="right-sidebar">
        {rightLinks.map((item) => (
          <div key={item.page}
            className={`sidebar-item${activePage===item.page?" active":""}`}
            onClick={() => setActivePage(item.page)}>
            <span style={{ fontSize:17, flexShrink:0, width:18, textAlign:"center" }}>{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}