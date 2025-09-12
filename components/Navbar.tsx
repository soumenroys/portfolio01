'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";

type ChildItem = { href: string; label: string; icon?: React.ReactNode };
type NavItem = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  children?: ChildItem[];
};

export default function Navbar() {
  const pathname = usePathname();

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // refs for submenu items focus management (anchor elements)
  const dropdownRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const links: NavItem[] = [
    { href: "/", label: "Home", icon: <Home size={16} /> },
    {
      href: "/case-studies",
      label: "Case Studies",
      icon: <FolderOpen size={16} />,
      children: [
        { href: "/case-studies/tata-steel", label: "Tata Steel", icon: <Factory size={16} /> },
        { href: "/case-studies/openlm", label: "OpenLM", icon: <BarChart3 size={16} /> },
        { href: "/case-studies/grp", label: "GRP", icon: <Database size={16} /> },
      ],
    },
    { href: "/experience", label: "Experience", icon: <Briefcase size={16} /> },
    { href: "/publications", label: "Publications", icon: <BookOpen size={16} /> },
    { href: "/approach", label: "Approach", icon: <Compass size={16} /> },
    { href: "/contact", label: "Contact", icon: <MessageCircle size={16} /> },
  ];

  const isCaseStudiesActive = pathname?.startsWith?.("/case-studies") ?? false;

  // Focus first submenu item when dropdown opens
  useEffect(() => {
    if (activeDropdown !== null && dropdownRefs.current[0]) {
      dropdownRefs.current[0]?.focus();
    }
  }, [activeDropdown]);

  // Close dropdown + mobile menu on Escape
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

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest("nav")) {
        setActiveDropdown(null);
      }
    }
    if (activeDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // Close mobile menu on outside click
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  // Close dropdown and mobile menu when pathname changes
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  // Keyboard nav inside dropdown
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    parentIndex: number,
    childIndex?: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
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
      const prev =
        childIndex === undefined ? total - 1 : (childIndex - 1 + total) % total;
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
          const parentAnchors = document.querySelectorAll<HTMLElement>(
            "nav a, nav [role='menuitem']"
          );
          parentAnchors[parentIndex]?.focus();
        } else {
          e.preventDefault();
          const prev = (childIndex! - 1 + total) % total;
          dropdownRefs.current[prev]?.focus();
        }
      } else {
        if (childIndex === total - 1) {
          e.preventDefault();
          setActiveDropdown(null);
          const parentAnchors = document.querySelectorAll<HTMLElement>(
            "nav a, nav [role='menuitem']"
          );
          parentAnchors[parentIndex + 1]?.focus();
        } else {
          e.preventDefault();
          const next = childIndex === undefined ? 0 : childIndex + 1;
          dropdownRefs.current[next]?.focus();
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-transparent">
      <nav
        className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo: single child wrapper span so Link gets a single child */}
        <Link href="/" className="font-semibold tracking-tight">
          <span className="font-semibold tracking-tight inline-flex items-center gap-1">
            <span className="text-accent">Soumen</span>
            <span>Roy</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-4 text-sm items-center">
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
                    onClick={() =>
                      setActiveDropdown((p) => (p === index ? null : index))
                    }
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`px-3 py-2 rounded-md transition font-medium inline-flex items-center gap-2 ${
                      isActive
                        ? "bg-accent text-white shadow-md"
                        : "hover:bg-slate-800 hover:shadow-md"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                      aria-hidden
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        key="submenu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="absolute mt-2 bg-slate-900 border border-slate-700 rounded-lg shadow-lg py-2 w-64 z-50"
                        role="menu"
                        aria-label="Case Studies submenu"
                      >
                        {item.children!.map((child, childIndex) => {
                          const subActive = pathname === child.href;
                          return (
                            <li key={child.href} role="none">
                              {/* Link must have exactly one child element -> wrapper span */}
                              <Link
                                href={child.href as any}
                                role="menuitem"
                                onClick={() => setActiveDropdown(null)}
                                onKeyDown={(e) =>
                                  handleKeyDown(e as any, index, childIndex)
                                }
                                ref={(el) => {
                                  // Link forwards ref to anchor; store anchor ref for focus management
                                  dropdownRefs.current[childIndex] = el as any;
                                }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                                  subActive
                                    ? "bg-accent text-white shadow-md"
                                    : "hover:bg-slate-800 hover:shadow-md"
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  {child.icon}
                                  <span>{child.label}</span>
                                </span>
                              </Link>
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
                  className={`px-3 py-2 rounded-md transition font-medium inline-flex items-center gap-2 ${
                    isActive
                      ? "bg-accent text-white shadow-md"
                      : "hover:bg-slate-800 hover:shadow-md"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`}
                >
                  {/* single wrapper so Link gets a single child */}
                  <span className="inline-flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
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
            className="p-2"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-slate-900 border-t border-slate-700 px-4 py-4 space-y-4"
            role="dialog"
            aria-label="Mobile menu"
          >
            {links.map((item) => {
              const isActive =
                item.href === "/case-studies"
                  ? isCaseStudiesActive
                  : pathname === item.href;
              return (
                <div key={item.href}>
                  <Link
                    href={item.href as any}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 rounded-md font-medium inline-flex items-center gap-2 ${
                      isActive
                        ? "bg-accent text-white px-3 py-2 shadow-md"
                        : "hover:bg-slate-800 hover:shadow-md px-3 py-2"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </span>
                  </Link>

                  {item.children && (
                    <div className="pl-6 mt-2 space-y-1">
                      {item.children.map((child) => {
                        const subActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href as any}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-2 py-1 rounded-md ${
                              subActive
                                ? "bg-accent text-white px-3 py-2 shadow-md"
                                : "hover:bg-slate-800 hover:shadow-md px-3 py-2"
                            }`}
                          >
                            <span className="inline-flex items-center gap-2">
                              {child.icon}
                              <span>{child.label}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
