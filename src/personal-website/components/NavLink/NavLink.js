import React from "react";
import { Link } from "react-scroll";
function NavLink(props) {
  function hovered(e) {
    e.target.style.background = "red";
  }

  function unhovered(e) {
    e.target.style.background = "none";
  }

  return (
    <Link
      data-testid="NavLink"
      to={props.link}
      spy={true}
      smooth={true}
      offset={-69}
      onMouseEnter={hovered}
      onMouseLeave={unhovered}
      style={{
        fontWeight: "bold",
        fontSize: 18,
        paddingLeft: "25px",
        paddingRight: "25px",
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
      onClick={() => {
        props.setDrawerOpen(false);
      }}
    >
      {props.link}
    </Link>
  );
}

export default NavLink;
