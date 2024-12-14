import { useState } from "react";
import logo from "/logo.svg";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["recipes", "resources", "about", "contact"];
  const logoPath = logo;

  const onOpen = () => {
    setHideLeft("left-0");
  };
  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };

  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} Logo={logoPath} />
      </div>
      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          Logo={logoPath}
          onClose={onClose}
          hideLeft={hideLeft}
          onOpen={onOpen}
        />
      </div>
    </>
  );
};

export default Header;
