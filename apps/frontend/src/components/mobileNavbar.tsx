import { Bars3Icon } from "@heroicons/react/16/solid";
import Sidebar from "./sideBar";

type Props = {
  children: React.ReactNode;
};

const MobileNavbar = ({ children }: Props) => {
  return (
    <div className="md:hidden">
      <Sidebar
        triggerIcon={<Bars3Icon className="w-4" />}
        triggerClassName="absolute top-2 left-2"
      >
        {children}
      </Sidebar>
    </div>
  );
};
export default MobileNavbar;
