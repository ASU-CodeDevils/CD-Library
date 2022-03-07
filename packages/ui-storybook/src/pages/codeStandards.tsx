import { Anchor, CodeBlock } from "../components";

const CodeStandards = () => {
    return (
        <div className="container cs">
            <section className="cs__overview">
                <Anchor as="h1" text="Code Standards" />
                <p>Although we won&#39;t be being super strict about code standards, there are
                    a few that we should practice, especially when using Typescript.
                </p>
            </section>
            <section className="cs__javascript">
                <Anchor text="Javascript" />
                <p>In general, the Javascript coding standards are:</p>
                <ul>
                    <li>Indentation will be using 2 spaces, and no tabs.</li>
                    <li>Use double quotes instead of single quotes.</li>
                    <li>Lines will be no longer than 120 characters.</li>
                    <li>Use <code>const</code> whenever a variable is assigned only once
                    and never reassigned. Use <code>let</code> everywhere else.</li>
                    <li>Variables should be named camel-case (i.e. <code>let thisVariable;</code>).
                    The only exception is global constants which should be all-caps and
                    underscore-delimited (i.e. <code>const GLOBAL_CONSTANT = 10;</code>).
                    </li>
                    <li>Be generous and precise with documentation. Document any process and
                        all functions/classes.
                    </li>
                    <li>
                        Use arrow functions (<code>const func = () =&gt; &#123;&#125;</code>)
                        whenever possible.
                    </li>
                    <li>Use <code>===</code> instead of <code>==</code>.</li>
                    <li>No unused imports.</li>
                    <li>All test files must be in the <code>__tests__</code> directory.</li>
                    <li>End all statements with semi-colons.</li>
                    <li>The opening brace <code>&#123;</code> and bracket <code>[</code> should
                    be on the same line as the variable/function name.</li>
                </ul>
                <p>All coding standards are defined in the <code>.eslintrc.json</code>.</p>
            </section>
            <section className="cs__typescript">
                <Anchor text="Typescript" />
                <p>Typescript standards are configured using both ESLint and the
                    <code>tsconfig.json</code> and follow these general guidelines:
                </p>
                <ul>
                    
                    <li>No implicit <code>any</code> types.</li>
                    <li>Use interfaces whenever possible, and type literals for single-line type aliasing.</li>
                    <li>Start interface names with an I (i.e. <code>interface IFoo &#123;&#125;</code>).</li>
                    <li>Avoid type casting whenever possible, but if type casting is required use
                        the <code>as</code> annotation (i.e. <code>(getFooLikeStructure() as IFoo).foo;</code>).
                    </li>
                </ul>
            </section>
            <section className="cs__react">
                <Anchor text="React" />
                <p>We are implementing React in Typescript, and thus will take advantage of Typescript to validate
                    props and make our React components clean and readable. There are a couple ways to implement
                    components. We will be using <strong>functional components</strong>.
                </p>
                <p>We will use a consistent file/folder structure when creating new components:</p>
                <CodeBlock language="bash">
                    {`
                        src/
                        |--- components/
                        |--- |--- Button/
                        |--- |--- |--- index.ts
                        |--- |--- |--- Button.tsx
                        |--- |--- |--- Button.props.ts
                    `}
                </CodeBlock>
                <p>Here is the purpose for each of these files:</p>
                <ul>
                    <li><code>Button.tsx</code> - The component itself. This should export a single component as the default.</li>
                    <li><code>ButtonProps.ts</code> - The component props.</li>
                    <li><code>index.ts</code> - Exports everything from
                    both <code>Button.tsx</code> and <code>ButtonProps.ts</code>.</li>
                </ul>
                <Anchor as="h3" anchor="react-component-props">
                    <code>Button.props.ts</code>
                </Anchor>
                <p>Component props should be in their own file and look like this:</p>
                <CodeBlock language="tsx">
                    {`
                        export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
                            /** The text to show on the button. */
                            text: string;
                        }

                        type ButtonProps = IButtonProps;
                        export default ButtonProps;
                    `}
                </CodeBlock>
                <p>We accomplish two things here:</p>
                <ul>
                    <li>We define our own button attributes, for example <code>text</code>. We give it a description
                    at the top with the double-star <code>{"/** */"}</code> notation so that we can hover over this prop
                    in any place in VSCode (or any favorite text editor) and view the description and type.
                    </li>
                    <li>We then extend the button attributes <code>{"ButtonHTMLAttributes<HTMLButtonElement>"}</code>, which
                    will give us access to the built-in HTML props of a button, such as event listeners, button type, etc.
                    </li>
                </ul>
                <Anchor as="h3" anchor="react-component">
                    <code>Button.tsx</code>
                </Anchor>
                <p>The button component should look like this:</p>
                <CodeBlock language="tsx">
                    {`
                        import ButtonProps from "./ButtonProps";

                        const Button = ({text, ...htmlButtonProps}: ButtonProps) => {
                            return (
                                <button {...htmlButtonProps}>
                                    {text}
                                </button>
                            )
                        }

                        export default ButtonProps;
                    `}
                </CodeBlock>
                <Anchor as="h3" anchor="react-component-index">
                    <code>index.ts</code>
                </Anchor>
                <p>Here we simply export the contents of all files so they are accessible by importing
                    the <code>Button/</code> directory.
                </p>
                <CodeBlock language="tsx">
                    {`
                        export { default as Button } from "./Button";
                        export type { default as ButtonProps, IButtonProps } from "./Button.props";
                    `}
                </CodeBlock>
            </section>
        </div>
    );
}

export default CodeStandards;