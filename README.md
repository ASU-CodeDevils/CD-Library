
# CD-Library
This project is a mono-repository containing NodeJS utilities, including:

* `@cd/ui` - A [React](https://reactjs.org/) Component Library
* `@cd/ui-storybook` - A [StorybookJS](https://storybook.js.org/) project for visualizing UI components
* `@cd/ui-styles` - A [SCSS](https://sass-lang.com/) project containing all of CodeDevils' styling

As of now, all projects are built off each other.

## Installation

### Install Dependencies

You will need to install Lerna globally to manage the project’s dependencies:

```
npm install --global lerna
```

We will use yarn as our package manager:

```
npm install --global yarn 
```

### Clone the GitHub Repository

Clone the repository:

```
// with SSH
git clone git@github.com:ASU-CodeDevils/CD-Library.git

// with HTTPS
git clone https://github.com/ASU-CodeDevils/CD-Library.git

// with GitHub CLI
gh repo clone ASU-CodeDevils/CD-Library
```

Then change to the project’s root directory

```
cd CD-Library
```

### Configure Lerna

To install dependencies for all projects, simply run:

```
npx lerna bootstrap
```

To build all packages, just run:

```
npx lerna run build
```

You can then run Storybook by running:

```
npx lerna run storybook
```

Or you can run the React project inside the `@cd/ui-storybook` project:

```
npx lerna run start
```

This is nothing more than a playground for you to add components from the component library
and mess around with React. We will be spending most of our time in Storybook.

This will open a tab in your default browser to Storybook. You will see a brief introduction about how to set up and learn Storybook. It’s recommended you check these out as Storybook can be configured in more ways than just listing props.

Running the npx lerna run <script> command will run all packages with the <script> command specified in their package.json.

### Linting

Linting and formatting is set up as a combination of ESLint and Prettier.

To run the linter:

```
yarn lint
# or to make certain fixes for you
yarn lint:fix
```

You have 2 options when running the Prettier.

1. Run the command `yarn prettify`, which will run Prettier on all applicable files.
2. Install the Prettier VSCode extension. The settings are set up so that Prettier will run each time you save a file.
