import React, { useState } from "react";
import Header from "./Header";
import SlidingPanel from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

export default function AppLayout({ children }) {
  const [menuPanel, setMenuPanel] = useState(false);
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <>
      <div>
        <div>
          <Header setOpenPanel={setOpenPanel} setMenuPanel={setMenuPanel} />
          <div>{children}</div>
          <Footer />
        </div>
        <SlidingPanel
          type={"right"}
          isOpen={openPanel}
          size={window.innerWidth > 679 ? 30 : 100}
          backdropClicked={() => setOpenPanel(false)}
        >
          <div className="panel-container">
            <div>My Panel Content</div>
            <button onClick={() => setOpenPanel(false)}>close</button>
          </div>
        </SlidingPanel>
        <SlidingPanel
          type={"right"}
          isOpen={menuPanel}
          size={100}
          backdropClicked={() => setMenuPanel(false)}
        >
          <div className="panel-container !justify-start">
            <MobileMenu setMenuPanel={setMenuPanel} />
          </div>
        </SlidingPanel>
      </div>
    </>
  );
}
