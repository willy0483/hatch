"use client";

import { cn } from "@/lib/utils";
import { useState, PropsWithChildren, ReactNode, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

type Props = PropsWithChildren<{
  triggerIcon: ReactNode;
  triggerClassName?: string;
}>;

const Sidebar = ({ children, triggerIcon }: Props) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLElement>, () => setShow(false));

  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>{triggerIcon}</button>
      <div
        ref={ref}
        className={cn(
          "w-60 absolute top-0 z-10 transition-all bg-white rounded-r-md min-h-screen",
          {
            "-left-full ": !show,
            "left-0": show,
          }
        )}
      >
        {children}
      </div>
    </>
  );
};
export default Sidebar;
