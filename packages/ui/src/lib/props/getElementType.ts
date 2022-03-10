import { As } from "./types";

interface GetElementTypeOptions {
  as?: As;

  getDefault?: () => As | undefined;
}

/**
 * Returns a createElement() type based on the props of the component.
 *
 * @see https://github.com/Semantic-Org/Semantic-UI-React/blob/50f29527d38baf267ddbedf10f0759ee88d5b9ae/src/lib/getElementType.js#L10
 * @param options Options for setting the `as` properties and defaults.
 * @returns The `ReactElement` type.
 */
export const getElementType = (options: GetElementTypeOptions): As => {
  const { as = "div", getDefault } = options;

  if (getDefault) {
    const defaultAs = getDefault();
    if (defaultAs) {
      return defaultAs;
    }
  }

  return as;
};
