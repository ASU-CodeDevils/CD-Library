import AnchorProps from "./Anchor.props";
import "./Anchor.scss";

/**
 * Generates a slug using a human-readable text.
 *
 * @param text The human-readable text.
 * @returns The HTML-safe slug of the text.
 */
const slugifyText = (text: string) => {
  return text.toLowerCase().replace(/\s/g, "-");
};

const Anchor = ({ as = "h2", anchor, text, children }: AnchorProps) => {
  if (anchor === undefined && text === undefined) {
    throw new Error("text must be defined if anchor is undefined");
  }

  const Element = as;
  const id = anchor === undefined && text !== undefined
    ? slugifyText(text)
    : anchor;

  return (
    <a href={`#${id}`} className="anchor">
      <Element id={id}>{children ?? text}</Element>
    </a>
  );
};

export default Anchor;
