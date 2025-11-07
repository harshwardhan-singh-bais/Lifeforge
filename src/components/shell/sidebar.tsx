"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  BookText,
  BrainCircuit,
  Repeat,
  Timer,
  CalendarClock,
  Database,
  LayoutTemplate,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Tasks", icon: CheckSquare, href: "#" },
  { name: "Notes", icon: BookText, href: "#" },
  { name: "Skills", icon: BrainCircuit, href: "#" },
  { name: "Habits", icon: Repeat, href: "#" },
  { name: "Pomodoro", icon: Timer, href: "#" },
  { name: "Timeline", icon: CalendarClock, href: "#" },
  { name: "Tables", icon: Database, href: "#" },
  { name: "Templates", icon: LayoutTemplate, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
];

export function Sidebar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLinks = () => (
    <nav className="mt-8">
      <ul>
        {navItems.map((item) => (
          <li key={item.name} className="mb-2">
            <a
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 text-neutral-400 rounded-md transition-all duration-200",
                "hover:bg-primary/20 hover:text-white group",
                item.name === "Dashboard" ? "bg-primary/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_1px_1px_rgba(0,0,0,0.2)]" : ""
              )}
            >
              <item.icon className={cn("w-5 h-5 text-neutral-500 group-hover:text-primary transition-colors duration-200", item.name === "Dashboard" && "text-primary")} />
              <span className="font-medium">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-black border-r border-neutral-900 p-4 fixed left-0 top-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-primary rounded-lg shadow-[0_0_15px_rgba(138,43,226,0.8),_inset_0_0_4px_rgba(255,255,255,0.3)]"></div>
          <h1 className="text-xl font-bold text-white tracking-wide">LifeForge</h1>
        </div>
        <NavLinks />
      </aside>

      {/* Mobile Header & Menu */}
      <header className="md:hidden flex items-center justify-between p-4 bg-black border-b border-neutral-900 sticky top-0 z-40">
         <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-primary rounded-md shadow-[0_0_10px_rgba(138,43,226,0.8)]"></div>
            <h1 className="text-lg font-bold text-white">LifeForge</h1>
         </div>
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
          <Menu size={24} />
        </button>
      </header>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-0 left-0 w-full max-w-xs h-full bg-black border-r border-neutral-900 p-4 z-50"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-primary rounded-lg shadow-[0_0_15px_rgba(138,43,226,0.8)]"></div>
                <h1 className="text-xl font-bold text-white">LifeForge</h1>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X size={24} />
              </button>
            </div>
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}