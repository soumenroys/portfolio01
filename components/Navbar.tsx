// /components/Navbar.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Briefcase,
  BookOpen,
  Compass,
  MessageCircle,
  FolderOpen,
  Factory,
  BarChart3,
  Database,
  Cpu,
  TrendingUp,
  Mic,
} from "lucide-react";

type ChildItem = { href: string; label: string; icon?: React.ReactNode; dividerBefore?: boolean };
type NavItem = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  children?: ChildItem[];
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRefs = useRef<Array<HTMLElement | null>>([]);

  // Scroll-aware background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: NavItem[] = [
    { href: "/", label: "Home", icon: <Home size={16} /> },
    {
      href: "/case-studies",
      label: "Case Studies",
      icon: <FolderOpen size={16} />,
      children: [
        { href: "/case-studies/openlm", label: "OpenLM", icon: <BarChart3 size={16} /> },
        { href: "/case-studies/grp", label: "GRP Steel", icon: <Database size={16} /> },
        { href: "/case-studies/tata-steel", label: "Tata Steel", icon: <Factory size={16} /> },
        { href: "/case-studies/mn-dastur-bim", label: "M. N. Dastur", icon: <Factory size={16} /> },
        { href: "/roi", label: "ROI & Business Impact", icon: <TrendingUp size={16} />, dividerBefore: true },
        { href: "/talks", label: "Talks & Presentations", icon: <Mic size={16} /> },
      ],
    },
    { href: "/experience", label: "Experience", icon: <Briefcase size={16} /> },
    { href: "/expertise", label: "Expertise", icon: <Cpu size={16} /> },
    { href: "/publications", label: "Publications", icon: <BookOpen size={16} /> },
    { href: "/approach", label: "Approach", icon: <Compass size={16} /> },
    { href: "/contact", label: "Contact", icon: <MessageCircle size={16} /> },
  ];

  const isCaseStudiesActive =
    pathname?.startsWith?.("/case-studies") ||
    pathname === "/roi" ||
    pathname === "/talks" ||
    false;

  useEffect(() => {
    if (activeDropdown !== null && dropdownRefs.current[0]) {
      dropdownRefs.current[0]?.focus();
    }
  }, [activeDropdown]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest("nav")) setActiveDropdown(null);
    }
    if (activeDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest("nav") && !target.closest("[aria-label='Mobile menu']")) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLElement>,
    parentIndex: number,
    childIndex?: number
  ) => {
    if ((e.key === "Enter" || e.key === " ") && childIndex === undefined) {
      if (links[parentIndex].children) {
        e.preventDefault();
        setActiveDropdown(parentIndex);
      }
      return;
    }
    if (activeDropdown !== parentIndex || !links[parentIndex].children) return;
    const total = links[parentIndex].children!.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = childIndex === undefined ? 0 : (childIndex + 1) % total;
      dropdownRefs.current[next]?.focus();
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = childIndex === undefined ? total - 1 : (childIndex - 1 + total) % total;
      dropdownRefs.current[prev]?.focus();
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setActiveDropdown(null);
      return;
    }
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (childIndex === 0) {
          e.preventDefault();
          setActiveDropdown(null);
          const parentAnchors = document.querySelectorAll<HTMLElement>("nav a, nav [role='menuitem']");
          parentAnchors[parentIndex]?.focus();
        } else {
          e.preventDefault();
          dropdownRefs.current[(childIndex! - 1 + total) % total]?.focus();
        }
      } else {
        if (childIndex === total - 1) {
          e.preventDefault();
          setActiveDropdown(null);
          const parentAnchors = document.querySelectorAll<HTMLElement>("nav a, nav [role='menuitem']");
          parentAnchors[parentIndex + 1]?.focus();
        } else {
          e.preventDefault();
          dropdownRefs.current[childIndex === undefined ? 0 : childIndex + 1]?.focus();
        }
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/92 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/25"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold tracking-tight inline-flex items-center gap-1 group"
        >
          <span className="text-accent group-hover:text-accent/80 transition-colors">Soumen</span>
          <span className="group-hover:text-slate-300 transition-colors">Roy</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-1 text-sm items-center">
          {links.map((item, index) => {
            const isActive =
              item.href === "/case-studies"
                ? isCaseStudiesActive
                : pathname === item.href;

            if (item.children) {
              const isOpen = activeDropdown === index;
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => setActiveDropdown((p) => (p === index ? null : index))}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onKeyDown={(e) => handleKeyDown(e as any, index)}
                    className={`px-3 py-2 rounded-md transition font-medium inline-flex items-center gap-1.5 ${
                      isActive
                        ? "bg-accent/15 text-accent"
                        : "text-slate-300 hover:text-white hover:bg-white/8"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900`}
                  >
                    <span>{item.label}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.18 }}
                      className="inline-block text-slate-500"
                      aria-hidden
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        key="submenu"
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute mt-1.5 bg-slate-950/95 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl shadow-black/40 py-2 w-64 z-50"
                        role="menu"
                        aria-label={`${item.label} submenu`}
                      >
                        {item.children!.map((child, childIndex) => {
                          const subActive = pathname === child.href;
                          return (
                            <li key={child.href} role="none">
                              {child.dividerBefore && (
                                <div className="my-1.5 mx-3 border-t border-white/8" />
                              )}
                              <div
                                role="menuitem"
                                tabIndex={0}
                                onClick={() => {
                                  setActiveDropdown(null);
                                  router.push(child.href as any);
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    setActiveDropdown(null);
                                    router.push(child.href as any);
                                  } else {
                                    handleKeyDown(e as any, index, childIndex);
                                  }
                                }}
                                ref={(el) => { dropdownRefs.current[childIndex] = el; }}
                                className={`flex items-center gap-2.5 mx-2 px-3 py-2 rounded-lg text-sm transition cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                                  subActive
                                    ? "bg-accent/15 text-accent font-medium"
                                    : "text-slate-300 hover:text-white hover:bg-white/8"
                                }`}
                              >
                                <span className="text-slate-500">{child.icon}</span>
                                <span>{child.label}</span>
                              </div>
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href as any}
                  className={`px-3 py-2 rounded-md transition font-medium inline-flex items-center gap-1.5 ${
                    isActive
                      ? "bg-accent/15 text-accent"
                      : "text-slate-300 hover:text-white hover:bg-white/8"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900`}
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((s) => !s)}
            className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/8 transition"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-white/8 px-4 py-4"
            role="dialog"
            aria-label="Mobile menu"
          >
            <div className="space-y-1">
              {links.map((item) => {
                const isActive =
                  item.href === "/case-studies"
                    ? isCaseStudiesActive
                    : pathname === item.href;
                return (
                  <div key={item.href}>
                    <Link
                      href={item.href as any}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                        isActive
                          ? "bg-accent/15 text-accent"
                          : "text-slate-300 hover:text-white hover:bg-white/8"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="text-slate-500">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>

                    {item.children && (
                      <div className="ml-9 mt-1 space-y-0.5 mb-2">
                        {item.children.map((child) => {
                          const subActive = pathname === child.href;
                          return (
                            <div key={child.href}>
                              {child.dividerBefore && (
                                <div className="my-1.5 border-t border-white/8" />
                              )}
                              <Link
                                href={child.href as any}
                                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition ${
                                  subActive
                                    ? "bg-accent/15 text-accent font-medium"
                                    : "text-slate-400 hover:text-white hover:bg-white/8"
                                }`}
                                onClick={() => setMobileOpen(false)}
                              >
                                <span className="text-slate-600">{child.icon}</span>
                                <span>{child.label}</span>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
