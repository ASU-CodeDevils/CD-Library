import { BaseComponentWithoutAs } from "../../..";
import ImageProps from "../Image/Image.props";

export interface ITextWithImageProps {
  image?: ImageProps;
}

type TextWithImageProps = BaseComponentWithoutAs<ITextWithImageProps>;
export default TextWithImageProps;
