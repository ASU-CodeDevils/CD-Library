import { Link } from "react-router-dom";
import { Anchor } from "../components";

const Home = () => {
  const pages = [
    {
      to: "/contribute",
      text: "Contribute",
    },
    {
      to: "/code-standards",
      text: "Code Standards",
    },
    {
      to: "/resources",
      text: "Resources",
    },
  ];

  return (
    <div className="container">
      <header className="app-header">
        <h1>CodeDevils Component Library</h1>
        <img
          src="https://codedevils.org/_next/image?url=%2Flogo-light.png&w=384&q=75"
          className="app-logo"
          alt="logo"
        />
        <p>
          This code is in <code>src/App.js</code>. Edit it, save it, and see how
          it shows up here!
        </p>
        <div className="app-links">
          <Anchor text="Pages" />
          <ul>
            {pages.map((page, index) => (
              <li key={`page-${index}`}>
                <Link to={page.to}>{page.text}</Link>
              </li>
            ))}
          </ul>
          {/* <Anchor text="Resources" />
          <ul>
            {resources.map((link, index) => (
              <li key={`app-link-${index}`}>
                <a
                  className="app-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul> */}
        </div>
      </header>
    </div>
  );
};

export default Home;
