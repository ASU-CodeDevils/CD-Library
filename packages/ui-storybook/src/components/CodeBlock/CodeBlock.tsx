import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import CodeBlockProps from "./CodeBlock.props";

/**
 * Formats a code block passed to the `CodeBlock` element to better handle
 * white space for smaller screen sizes.
 *
 * @param code The code children to be processed.
 * @returns The formatted code string.
 */
const process = (code: React.ReactNode) => {
  let skippedLeadingEmptyLines = false;
  let lastLineIdx = 0;
  let indentation = Number.MAX_SAFE_INTEGER;
  let numRemovedLines = 0;

  const processNonEmptyLine = (line: string, i: number) => {
    lastLineIdx = i - numRemovedLines;
    indentation = Math.min(indentation, Math.max(0, line.search(/[^ \t]/)));
    return [line.trimEnd()];
  };

  const lines = `${code}`
    .split("\n")
    .flatMap((line, i) => {
      if (!skippedLeadingEmptyLines) {
        if (line.match(/^[ \t]*$/)) {
          numRemovedLines += 1;
          return [];
        }

        skippedLeadingEmptyLines = true;
        return processNonEmptyLine(line, i);
      }

      if (line.match(/^[ \t]*$/)) {
        return [""];
      }

      return processNonEmptyLine(line, i);
    })
    .slice(0, lastLineIdx + 1);

  if (lines.length === 0) {
    return "";
  }

  return (
    indentation !== 0 ? lines.map((line) => line.substring(indentation)) : lines
  ).join("\n");
};

/**
 * Renders a code block example on a page. Default language it renders is
 * Typescript.
 *
 * @example ```
 *  <CodeBlock>
 *    {`
 *      const addEm = (num1: number, num2: number) => num1 + num2;
 *    `}
 *  </CodeBlock>
 * ```
 */
const CodeBlock = ({
  style = vscDarkPlus,
  language = "typescript",
  children,
  ...rest
}: CodeBlockProps) => {
  if (typeof children !== "string") {
    throw new Error("CodeBlock children must be a string");
  }
  const cleanedChildren = process(children);

  return (
    <SyntaxHighlighter style={style} language={language} {...rest}>
      {cleanedChildren}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
