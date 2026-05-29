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

export default function Home({ setActivePage }) {
  return (
    <div style={{ height:"100%", display:"grid", gridTemplateRows:"1fr auto" }}>
      <style>{`
        .orbit-r1{position:absolute;inset:0;border-radius:50%;border:1px dashed rgba(201,168,76,0.2);animation:spin 22s linear infinite}
        .orbit-r2{position:absolute;inset:22px;border-radius:50%;border:1px dashed rgba(201,168,76,0.11);animation:spin 34s linear infinite reverse}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .officer-dot{position:absolute;width:50px;height:50px;border-radius:50%;cursor:pointer;transition:transform .3s;z-index:1}
        .officer-dot:hover{transform:scale(1.25);z-index:10}
        .officer-avatar{width:100%;height:100%;border-radius:50%;border:2px solid #c9a84c;display:flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-weight:700;font-size:11px;color:#fff}
        .officer-tip{position:absolute;bottom:-46px;left:50%;transform:translateX(-50%);background:rgba(6,14,30,0.97);border:1px solid #c9a84c;border-radius:4px;padding:3px 8px;font-size:10px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s;z-index:20;text-align:center}
        .officer-dot:hover .officer-tip{opacity:1}
        .fleet-card{text-align:center;padding:4px 6px;transition:transform .2s;cursor:pointer}
        .fleet-card:hover{transform:translateY(-3px)}
        .op-card{padding:4px 10px;cursor:pointer}
        .op-card:hover .op-name{color:#f0d080}
        @keyframes pulseRing{0%{transform:translate(-50%,-50%) scale(.9);opacity:.7}100%{transform:translate(-50%,-50%) scale(1.2);opacity:0}}
        .btn-home{padding:9px 22px;border-radius:3px;font-family:'Rajdhani',sans-serif;font-weight:700;font-size:11px;letter-spacing:2px;cursor:pointer;border:none;transition:transform .2s}
        .btn-home:hover{transform:translateY(-2px)}
      `}</style>

      {/* Hero */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 36px", position:"relative" }}>
        {[220,340,460].map((size,i)=>(
          <div key={i} style={{ position:"absolute", top:"50%", left:"36%", transform:"translate(-50%,-50%)", width:size, height:size, borderRadius:"50%", border:"1px solid rgba(201,168,76,0.1)", animation:`pulseRing ${3.5+i}s ease-out infinite`, animationDelay:`${i*0.7}s`, pointerEvents:"none" }} />
        ))}

        <div style={{ flex:1, maxWidth:380 }}>
          <div style={{ fontSize:10, color:"#c9a84c", letterSpacing:3, marginBottom:10 }}>॥ शं नो वरुणः ॥ — MAY VARUNA BE AUSPICIOUS</div>
          <h1 className="cinzel gold" style={{ fontWeight:700, fontSize:"2.4rem", lineHeight:1.1, marginBottom:6 }}>INDIAN<br/>NAVY</h1>
          <div style={{ fontSize:11, color:"#90afc5", letterSpacing:5, marginBottom:10 }}>PRIDE · POWER · PROTECTION</div>
          <p style={{ fontSize:13, color:"#7a9bb5", lineHeight:1.6, marginBottom:18, maxWidth:320 }}>
            Safeguarding India's maritime interests, ensuring regional stability and projecting strategic power across the Indo-Pacific.
          </p>
          <div style={{ display:"flex", gap:10, marginBottom:20 }}>
            <button className="btn-home" style={{ background:"linear-gradient(90deg,#c9a84c,#e8c45a)", color:"#0a1628" }} onClick={()=>setActivePage("Fleet")}>EXPLORE FLEET</button>
            <button className="btn-home" style={{ background:"transparent", border:"1px solid #c9a84c", color:"#c9a84c" }} onClick={()=>setActivePage("Recruitment")}>JOIN NAVY</button>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10, borderTop:"1px solid rgba(201,168,76,0.2)", paddingTop:14 }}>
            {[["130+","WARSHIPS"],["16+","SUBMARINES"],["200+","AIRCRAFT"],["67K+","PERSONNEL"]].map(([n,l])=>(
              <div key={l}>
                <div className="cinzel" style={{ fontSize:"1.3rem", fontWeight:700, color:"#c9a84c" }}>{n}</div>
                <div style={{ fontSize:9, color:"#7a9bb5", letterSpacing:1.5, marginTop:1 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Officer Orbit */}
        <div style={{ position:"relative", width:260, height:260, flexShrink:0 }}>
          <div className="orbit-r1" />
          <div className="orbit-r2" />
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:68, height:68, borderRadius:"50%", background:"linear-gradient(135deg,#1a3a5c,#0d2b4e)", border:"2px solid #c9a84c", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, boxShadow:"0 0 20px rgba(201,168,76,0.25)" }}>⚓</div>
          {officers.map((o,i)=>{
            const R=98,cx=130,cy=130;
            const angle=(i/officers.length)*2*Math.PI-Math.PI/2;
            return (
              <div key={i} className="officer-dot" style={{ left:cx+R*Math.cos(angle)-25, top:cy+R*Math.sin(angle)-25 }}>
                <div className="officer-avatar" style={{ background:`linear-gradient(135deg,${o.col},#0d2b4e)` }}>{o.init}</div>
                <div className="officer-tip">
                  <div style={{ color:"#c9a84c", fontWeight:700, fontSize:10 }}>{o.name}</div>
                  <div style={{ color:"#7a9bb5", fontSize:9 }}>{o.rank}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Strip */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr) 2px repeat(3,1fr)", gap:0, borderTop:"1px solid rgba(201,168,76,0.2)", background:"rgba(6,14,28,0.9)", padding:"10px 16px", alignItems:"center" }}>
        {fleetData.map(f=>(
          <div key={f.name} className="fleet-card">
            <div style={{ fontSize:18, marginBottom:2 }}>{f.icon}</div>
            <div className="cinzel" style={{ fontSize:"1rem", fontWeight:700, color:"#c9a84c" }}>{f.count}</div>
            <div style={{ fontSize:9, color:"#90afc5", letterSpacing:".8px" }}>{f.name}</div>
          </div>
        ))}
        <div style={{ background:"rgba(201,168,76,0.25)", width:1, height:60, margin:"0 auto" }} />
        {operations.map(op=>(
          <div key={op.name} className="op-card">
            <span style={{ fontSize:8, fontWeight:700, letterSpacing:"1.5px", padding:"2px 7px", borderRadius:3, background:"rgba(201,168,76,0.12)", color:"#c9a84c", border:"1px solid rgba(201,168,76,0.28)", display:"inline-block", marginBottom:4 }}>{op.badge}</span>
            <div className="cinzel op-name" style={{ fontSize:11, color:"#d4b85a", marginBottom:2 }}>{op.name}</div>
            <div style={{ fontSize:10, color:"#7a9bb5", lineHeight:1.4 }}>{op.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}