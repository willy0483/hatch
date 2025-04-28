import { PropsWithChildren } from "react";
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

type Props = PropsWithChildren;

const NavbarContainer = ({ children }: Props) => {
  return (
    <div className="relative">
      <DesktopNavbar>{children}</DesktopNavbar>
      <MobileNavbar>{children}</MobileNavbar>
    </div>
  );
};
export default NavbarContainer;
