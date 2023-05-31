import { BsChevronDown } from "react-icons/bs";

import { RiDashboardFill } from "react-icons/ri";

import classes from "./MenuItem.module.scss";

const MenuItem = ({ menu, open, submenuOpen, setSubmenuOpen }) => {
  return (
    <li
      onClick={() => {
        menu.submenu && open &&  setSubmenuOpen(!submenuOpen);
      }}
      className={`${classes.listMenuContainer} ${
        menu.spacing ? "mt-9" : "mt-2"
      } `}
      key={menu.id}
    >
      <span className={`text-2xl block float-left`}>
        {menu.icon ? menu.icon : <RiDashboardFill />}
      </span>
      <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
        {menu.title}
      </span>
      {menu.submenu && open && (
        <BsChevronDown className={`${submenuOpen && "rotate-180"}`} />
      )}
    </li>
  );
};

export default MenuItem;
