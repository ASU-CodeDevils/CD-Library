import "./App.css";

function App() {
  const links = [
    {
      href: "https://reactjs.org",
      text: "Learn React"
    },
    {
      href: "https://storybook.js.org/docs/react/get-started/introduction",
      text: "StorybookJS for React"
    },
    {
      href: "https://github.com/lerna/lerna",
      text: "Lerna - A monorepo management tool"
    },
    {
      href: "https://sass-lang.com/",
      text: "The SASS Mark-up language (a CSS extension)"
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeDevils Component Library</h1>
        <img src="//codedevils.org/static/img/logo-light.png" className="App-logo" alt="logo" />
        <p>
          This code is in <code>src/App.js</code>. Edit it, save it, and see how it shows up here!
        </p>
        <div className="App-links">
          <ul>
            {links.map((link, index) => (
                <li key={`app-link-${index}`}>
                  <a
                    className="App-link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
