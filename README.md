
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

Build all dependencies by running:

```
npx lerna run build
```

You can then run Storybook by running:

```
npx lerna run storybook
```

This will open a tab in your default browser to Storybook. You will see a brief introduction about how to set up and learn Storybook. It’s recommended you check these out as Storybook can be configured in more ways than just listing props.

Running the npx lerna run <script> command will run all packages with the <script> command specified in their package.json.
