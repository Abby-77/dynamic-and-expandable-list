import "./styles.css";
import { useState } from "react";

const menuConfig = [
  {
    title: "Home"
  },
  {
    title: "Services",
    subItems: ["Cooking", "Cleaning"]
  },
  {
    title: "Contact",
    subItems: ["Phone", "Mail"]
  }
];

const MenuItem = (props) => {
  const handleClick = () => {
    props.changeTitle(props.menuData.title);
  };
  return (
    <>
      <div>{props.menuData.title}</div>
      {!props.menuData.subItems ? null : (
        <>
          <button
            data-test-id={"button-" + props.menuData.title.toLowerCase()}
            onClick={handleClick}
          >
            Expand
          </button>
          {props.activeTitle === props.menuData.title ? (
            <ul data-test-id={"ul-" + props.menuData.title.toLowerCase()}>
              {props.menuData.subItems.map((subItem, index) => {
                return (
                  <li
                    data-test-id={"li-" + props.menuData.title.toLowerCase()}
                    key={index}
                  >
                    {subItem}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </>
      )}
    </>
  );
};

export default function App() {
  const [curTitle, setCurTitle] = useState("");

  const changeTitle = (newTitle) => {
    setCurTitle(newTitle);
  };

  return (
    <div className="menu-wrapper">
      <div>
        {menuConfig.map((menu) => (
          <MenuItem
            data-test-id={"first-level-" + menu.title.toLowerCase()}
            menuData={menu}
            activeTitle={curTitle}
            changeTitle={changeTitle}
          >
            {menu.title.toLowerCase()}
          </MenuItem>
        ))}
      </div>
    </div>
  );
}
