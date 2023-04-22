const NavItem = ({ link, active, handleActive, isMobile }) => {
  return (
    <li
      key={link.id}
      className={`${active === link.title ? "text-white" : "text-secondary"} ${
        isMobile
          ? "font-poppins font-medium cursor-pointer text-[16px]"
          : "hover:text-white text-[18px] font-medium cursor-pointer"
      }`}
      onClick={() => handleActive(link.title)}
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  );
};

export default NavItem;
