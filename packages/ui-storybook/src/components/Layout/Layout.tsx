import { useLocation } from "react-router-dom";

import LayoutProps from "./Layout.props";
import "./Layout.scss";

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="app">
      <div className={`app--nav${isHomePage ? ` hide` : ""}`}>
        <div className="app--nav__logo">
          <img
            src="//codedevils.org/static/img/logo-light.png"
            alt="CodeDevils logo"
          />
        </div>
      </div>
      <div className="app--content">{children}</div>
    </div>
  );
};

export default Layout;
