import PropTypes from "prop-types";
import { RiCloseCircleLine } from "react-icons/ri";

const MobileNav = ({ menuItems, Logo, onClose, hideLeft, onOpen }) => {
  return (
    <div
      className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex flex-col items-center`}
    >
      <button onClick={onClose} className="absolute right-8 top-32">
        <RiCloseCircleLine className="w-7 h-7" />
      </button>
      <button onClick={onOpen} className="mt-4">
        Open Menu
      </button>
      <div className="mt-8">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        {menuItems.map((item, index) => (
          <a key={index} href={`/${item}`} className="block py-2">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

MobileNav.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  Logo: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  hideLeft: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default MobileNav;
