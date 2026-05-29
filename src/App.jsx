import { useState } from "react";
import Layout from "./components/Layout";

// Navbar pages
import Home from "./pages/Home";
// import About from "./pages/About";
// import Fleet from "./pages/navbar/Fleet";
// import Operations from "./pages/navbar/Operations";
// import Recruitment from "./pages/navbar/Recruitment";
// import News from "./pages/navbar/News";
// import Gallery from "./pages/navbar/Gallery";
// import Contact from "./pages/navbar/Contact";

// Left sidebar pages
// import NavalHistory from "./pages/left/NavalHistory";
// import ShipRegistry from "./pages/left/ShipRegistry";
// import Awards from "./pages/left/Awards";
// import MaritimeZones from "./pages/left/MaritimeZones";
// import NavalDoctrine from "./pages/left/NavalDoctrine";
// import RDWing from "./pages/left/RDWing";

// Right sidebar pages
// import QuickApply from "./pages/right/QuickApply";
// import Helpdesk from "./pages/right/Helpdesk";
// import PressRoom from "./pages/right/PressRoom";
// import INSPortal from "./pages/right/INSPortal";
// import RTICell from "./pages/right/RTICell";
// import Alerts from "./pages/right/Alerts";

const PAGES = {
  // Navbar
  // Home, About, Fleet, Operations, Recruitment, News, Gallery, Contact,
  Home
  // Left
  // NavalHistory, ShipRegistry, Awards, MaritimeZones, NavalDoctrine, RDWing,
  // Right
  // QuickApply, Helpdesk, PressRoom, INSPortal, RTICell, Alerts,
};

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  const PageComponent = PAGES[activePage] || Home;

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      <PageComponent setActivePage={setActivePage} />
    </Layout>
  );
}