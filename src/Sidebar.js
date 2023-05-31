import {
  BsArrowLeftShort,
  BsSearch,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";

import { useState } from "react";

import classes from "./Sidebar.module.scss";
import MenuItem from "./MenuItem";
import SubmenuItem from "./SubmenuItem";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", id: 1 },
    { title: "Pages", id: 2, icon: <AiOutlineFileText /> },
    { title: "Media", id: 3, spacing: true, icon: <BsFillImageFill /> },
    {
      title: "Projects",
      id: 4,
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1", id: 1 },
        { title: "Submenu 2", id: 2 },
        { title: "Submenu 3", id: 3 },
      ],
    },
    { title: "Analytics", id: 5, icon: <AiOutlineBarChart /> },
    { title: "Inbox", id: 6, icon: <AiOutlineMail /> },
    { title: "Profile", id: 7, spacing: true, icon: <BsPerson /> },
    { title: "Setting", id: 8, icon: <AiOutlineSetting /> },
    { title: "Logout", id: 9, icon: <AiOutlineLogout /> },
  ];

  return (
    <div className="flex">
      <div className={`${classes.container} ${open ? "w-72" : "w-20"} `}>
        <BsArrowLeftShort
          className={`${classes.toggleIcon}  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <AiFillEnvironment
            className={`${classes.logo} ${open && "rotate-[360deg]"}`}
          />
          <h1 className={`${classes.iconTitle} ${!open && "scale-0"}`}>
            Tailwind
          </h1>
        </div>

        <div
          className={`${classes.searchContainer} ${!open ? "px-2.5" : "px-4"}`}
        >
          <BsSearch className={`${classes.searchIcon} ${open && "mr-2"}`} />
          <input
            type={"serach"}
            placeholder="search"
            className={`${classes.searchInput} ${!open && "hidden"}`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu) => (
            <>
              <MenuItem
                menu={menu}
                open={open}
                setSubmenuOpen={setSubmenuOpen}
                submenuOpen={submenuOpen}
              />
              {menu.submenu && open && submenuOpen && (
                <ul>
                  {menu.submenuItems.map((submenuItem) => (
                    <SubmenuItem submenuItem={submenuItem} />
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home page</h1>
      </div>
    </div>
  );
};

export default Sidebar;
