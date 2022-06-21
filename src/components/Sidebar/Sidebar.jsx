import React from "react";
import Link from "./Link";
import links from "../../data/links";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      {links.map((link) => (
        <Link {...link} />
      ))}
    </nav>
  );
};

export default Sidebar;
