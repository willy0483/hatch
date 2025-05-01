"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const DesktopNavbar = ({ children }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollPosition(currentScrollY);
  };

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrollDown = scrollPosition > 1;
  const isHome = pathname === "/";

  return (
    <nav
      className={cn(
        "fixed transition-colors w-full z-50 text-white top-0 hidden md:block",
        {
          "bg-white text-gray-700 shadow-md": isScrollDown || !isHome,
        }
      )}
    >
      <div className="flex items-center px-4 py-4 container mx-auto">
        {children}
      </div>
      <hr className="border-b border-gray-100/25" />
    </nav>
  );
};

export default DesktopNavbar;
