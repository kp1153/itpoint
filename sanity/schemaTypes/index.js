import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { offerType } from "./offerType"; // ← नया import

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, offerType], // ← offerType add किया
};
