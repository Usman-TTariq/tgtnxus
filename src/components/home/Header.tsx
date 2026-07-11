"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGO_MARK, LOGO_TYPE } from "@/lib/brand";

const HIRING_ARROW_LEFT = "/agenio/assets/images/banner/icon/arrow-right-red.svg";
const HIRING_ARROW_RIGHT = "/agenio/assets/images/banner/icon/arrow-left-red.svg";

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "CAREERS", href: "/careers" },
  { label: "OUR TEAM", href: "/team" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 150);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header-style-one header--sticky${sticky ? " sticky" : ""}`}>
        <div className="header-top">
          <div className="tgt-container">
            <div className="header-top-inner">
              <div className="left-icon">
                <img alt="" src={HIRING_ARROW_LEFT} width={13} height={16} />
              </div>
              <p className="text">
                WE ARE HIRING
                <span>MULTIPLE POSITIONS</span>
              </p>
              <div className="right-icon">
                <img alt="" src={HIRING_ARROW_RIGHT} width={13} height={16} />
              </div>
            </div>
          </div>
        </div>

        <div className="tgt-container">
          <div className="header-style-one-wrapper">
            <div className="left-area square-dot">
              <div className="logo-area">
                <Link href="/" className="logo" onClick={closeMenu}>
                  <img className="logo-mark" src={LOGO_MARK} alt="TGT Nexus" width={28} height={28} />
                  <img className="logo-type" src={LOGO_TYPE} alt="" aria-hidden width={120} height={20} />
                </Link>
              </div>
              <span className="square-shape top-left" aria-hidden />
              <span className="square-shape bottom-left" aria-hidden />
              <span className="square-shape top-right" aria-hidden />
              <span className="square-shape bottom-right" aria-hidden />
            </div>

            <nav className="main-nav-area" aria-label="Main navigation">
              <ul className="wpr-desktop-menu">
                {NAV_ITEMS.map((item) => (
                  <li
                    key={item.label}
                    className={`menu-item${isActive(pathname, item.href) ? " active" : ""}`}
                  >
                    <Link className="main-element" href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="button-area-start square-dot">
              <Link href="/contact" className="wpr-btn btn-primary" onClick={closeMenu}>
                CONTACT US
              </Link>
              <button
                id="menu-btn"
                type="button"
                className={menuOpen ? "cross" : ""}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className="line one" />
                <span className="line two" />
              </button>
              <span className="square-shape top-left" aria-hidden />
              <span className="square-shape bottom-left" aria-hidden />
              <span className="square-shape top-right" aria-hidden />
              <span className="square-shape bottom-right" aria-hidden />
            </div>

            <div id="side-bar" className={`side-bar${menuOpen ? " show" : ""}`}>
              <div className="sidebar-inner">
                <div className="mobile-menu-main">
                  <nav className="nav-main mainmenu-nav" aria-label="Mobile navigation">
                    <ul id="mobile-menu">
                      {NAV_ITEMS.map((item) => (
                        <li
                          key={item.label}
                          className={`menu-item${isActive(pathname, item.href) ? " active" : ""}`}
                        >
                          <Link className="main-element" href={item.href} onClick={closeMenu}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="button-area">
                  <Link href="/contact" className="wpr-btn btn-primary" onClick={closeMenu}>
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id="anywhere-home"
        className={menuOpen ? "bgshow" : ""}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />
    </>
  );
}
