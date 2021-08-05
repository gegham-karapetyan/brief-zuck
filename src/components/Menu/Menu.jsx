import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { briefType } from "../../features/selectBriefReducer";
import "./style.scss";

const pages = [
  "/Advertising-Campaign-Brief",
  "/Visual-Key-Visual-Brief",
  "/Commercial-Video-Brief",
  "/Commercial-Video-Brief",
  "/Social-Media-Activation-Brief",
  "/Strategy-Brief",
  "/Logo-Brief",
];

// const Menu = () => {
//   const [open, setOpen] = useState(false);
//   const value = useSelector(briefType);
//   const toggleMenu = (x) => {
//     setOpen(!open);
//   };
//   return (
//     <menu>
//       <div className="label">Ընտրել բրիֆը՝</div>
//       <div onClick={toggleMenu} className="option">
//         <div className="selected">{value}</div>
//         <div className={`accordionIcon ${open ? "open" : ""}`}></div>
//       </div>
//       <nav>
//         {open &&
//           [
//             <Link onClick={toggleMenu} key="1" to="/Advertising-Campaign-Brief">
//               Advertising Campaign Brief
//             </Link>,
//             <Link onClick={toggleMenu} key="2" to="/Visual-Key-Visual-Brief">
//               Visual / Key Visual Brief
//             </Link>,
//             <Link onClick={toggleMenu} key="3" to="/Commercial-Video-Brief">
//               Commercial Video Brief
//             </Link>,
//             <Link
//               onClick={toggleMenu}
//               key="4"
//               to="/Social-Media-Activation-Brief"
//             >
//               Social Media Activation Brief
//             </Link>,
//             <Link onClick={toggleMenu} key="5" to="/Strategy-Brief">
//               Strategy Brief
//             </Link>,
//             <Link onClick={toggleMenu} key="6" to="/Logo-Brief">
//               Logo Brief
//             </Link>,
//           ].filter(
//             (link) => link.props.to !== "/" + value.replace(/([\s/])+/g, "-")
//           )}
//       </nav>
//     </menu>
//   );
// };

const choose = {
  am: "Ընտրել բրիֆը՝",
  en: "Select the brief",
  ru: "Выберите бриф",
};

const Menu = ({ lg }) => {
  const { pathname } = useLocation();
  let initialState;
  if (pathname === "/Commercial-Video-Brief")
    initialState = { brief1: "", brief2: "selected" };
  else {
    initialState = { brief1: "selected", brief2: "" };
  }

  const [selected, setSelected] = useState(initialState);
  const selectBrief1 = () => {
    setSelected({
      brief1: "selected",
      brief2: "",
    });
  };
  const selectBrief2 = () => {
    setSelected({
      brief1: "",
      brief2: "selected",
    });
  };
  return (
    <menu>
      <div className={`label`}>{choose[lg]}</div>
      <span className={selected.brief1}>
        <Link onClick={selectBrief1} key="1" to="/Advertising-Campaign-Brief">
          Advertising Campaign Brief
        </Link>
      </span>
      <br />
      <span className={selected.brief2}>
        <Link onClick={selectBrief2} key="3" to="/Commercial-Video-Brief">
          Commercial Video Brief
        </Link>
      </span>
    </menu>
  );
};

export default Menu;
