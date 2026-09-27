import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logu.jpeg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/why-us", label: "Why Us" },
  { to: "/api-technology", label: "API & Technology" },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-base/95 backdrop-blur border-b border-subtle">
      <div className="max-w-content mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight text-basetext"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Xendpay Logo"
            width="22"
            height="22"
          />
          Xendpay
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-body transition-colors ${
                  isActive
                    ? "text-basetext font-semibold"
                    : "text-muted hover:text-basetext"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Get Started */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />

          <Link
            to="/contact"
            className="inline-flex justify-center bg-amber text-ink text-sm font-body px-4 py-2.5 rounded-full"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`block w-6 h-0.5 bg-basetext transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block w-6 h-0.5 bg-basetext transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block w-6 h-0.5 bg-basetext transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="lg:hidden border-t border-subtle bg-base px-5 py-4 flex flex-col gap-4">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-body ${
                  isActive
                    ? "text-basetext font-semibold"
                    : "text-muted hover:text-basetext"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-amber text-ink text-sm font-body px-4 py-2.5 rounded-full"
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
