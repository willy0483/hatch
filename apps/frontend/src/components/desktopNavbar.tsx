"use client";

import { cn } from "@/lib/utils";
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(window.screenY);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrollDown = scrollPosition > 1;

  return (
    <nav
      className={cn(
        "fixed transition-colors w-full z-50 text-white top-0 block",
        {
          "bg-white text-gray-700 shadow-md": isScrollDown,
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
