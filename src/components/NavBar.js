import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkItem = links.map((item) => {
    return <a href= {`#${item}`} key={item}>{item}</a>
  })

  return <nav>{linkItem}</nav>;
}

export default NavBar;
