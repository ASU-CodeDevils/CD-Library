import React from "react";

export interface IAnchorProps {
    /** The type of header this tag will represent. */
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

    /**
     * The anchor href. If not specified, the anchor will be the `text` prop
     * as an HTML-safe slug.
     */
    anchor?: string;

    /** The text to show in the header. This is the short-hand for children. */
    text?: string;
}

type AnchorProps = React.PropsWithChildren<IAnchorProps>;
export default AnchorProps;