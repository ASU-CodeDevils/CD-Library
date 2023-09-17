import { Anchor, CodeBlock } from "../components";

const Contributing = () => {
  return (
    <div className="container contributing">
      <Anchor as="h1" text="Contributing" />
      <p>In order to contribute you must:</p>
      <ul>
        <li>
          Be a member of the{" "}
          <a className="App-link" href="https://github.com/ASU-CodeDevils">
            ASU-CodeDevils GitHub
          </a>{" "}
          and on the{" "}
          <a href="https://github.com/orgs/ASU-CodeDevils/teams/cd-library-devs">
            CD-Library Team
          </a>{" "}
          team
        </li>
        <li>
          Join the CodeDevils{" "}
          <a href="https://discord.gg/4yzCwh6bXC">Discord server</a>{" "}
          and reach out to the project lead.
        </li>
      </ul>
      <Anchor text="Creating and Merging Branches" />
      <Anchor as="h3" text="Staging and Main Branches" />
      <p>
        We will be using the{" "}
        <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">
          Git flow branching strategy
        </a>
        . This means there will be 2 primary branches:
      </p>
      <ul>
        <li>
          <code>main</code> - This is the production branch and is where we will
          track the release history of each of the packages.
        </li>
        <li>
          <code>staging</code> - This is the development branch. All feature
          branches will be based on the <code>staging</code> branch, and only
          the <code>staging</code> branch will ever be merged into{" "}
          <code>main</code>.
        </li>
      </ul>
      <Anchor as="h3" text="Feature Branches" />
      <p>
        Feature branches are branches that represents tasks within the project.
        All feature branches are based on the <code>staging</code> branch and
        consist of the following:
      </p>
      <ul>
        <li>
          <code>feature</code> - New features to the project.
        </li>
        <li>
          <code>bugfix</code> - Issues with the code that were identified either
          before or after deployment.
        </li>
        <li>
          <code>release</code> - Fixes in support of deploying a release to
          production. This can include bug fixes and metadata updates needed to
          be done to release a package.
        </li>
      </ul>
      <Anchor as="h3" text="Git Workflow" />
      <p>Follow the below workflow when creating a new branch.</p>
      <ol>
        <li>
          Create a branch off <code>staging</code> based on the type of work
          being done. For example, when creating a feature branch:
          <CodeBlock language="bash">
            {`git checkout staging\ngit checkout -b feature/CD-121-add-button-styling`}
          </CodeBlock>
          Where <code>feature</code> signifies this branch is for creating a new
          feature,
          <code>CD-121</code> is the card number if working with Jira, and{" "}
          <code>add-button-styling</code> is a short description of the work
          being done.
        </li>
        <li>
          Start coding! You should commit your code frequently and with the
          following rules:
          <ol>
            <li>
              Commit messages should be no longer than 50 characters, and
              descriptions no longer than 75.
            </li>
            <li>
              Commit messages should start with a prefix according to the type
              of commit:
              <ul>
                <li>
                  <code>feat</code> - A new code snippet that enhances the code.
                </li>
                <li>
                  <code>fix</code> - A fix made to previously-implemented code.
                </li>
                <li>
                  <code>refactor</code> - Updating code to meet code standards
                </li>
              </ul>
              <p>An example of this:</p>
              <CodeBlock language="bash">
                {`
                                    git add <file or files to add>
                                    git commit -m "feat: added placeholder prop"
                                    git push
                                `}
              </CodeBlock>
            </li>
            <li>
              Once all your code has been committed, create a pull request from
              your feature branch into <code>staging</code>. In order for your
              code to be merged, it must:
              <ul>
                <li>Meet all code standards.</li>
                <li>Pass all Travis CI builds (if applicable).</li>
                <li>Have no merge conflicts.</li>
                <li>Be approved by the project lead.</li>
              </ul>
            </li>
            <li>
              Once the code is merged into staging, that&#39;s it! Move on to
              the next task.
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
};

export default Contributing;
