import { Anchor } from "../components";

const Resources = () => {
  const resources = [
    {
      href: "https://reactjs.org",
      text: "Learn React",
    },
    {
      href: "https://storybook.js.org/docs/react/get-started/introduction",
      text: "StorybookJS for React",
    },
    {
      href: "https://github.com/lerna/lerna",
      text: "Lerna - A monorepo management tool",
    },
    {
      href: "https://sass-lang.com/",
      text: "The SASS Mark-up language (a CSS extension)",
    },
  ];

  return (
    <div className="resources container">
      <Anchor as="h1" text="Resources" />
      <p>
        Here are some additional resources to help you get set up for the
        project.
      </p>
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
      </ul>
    </div>
  );
};

export default Resources;
