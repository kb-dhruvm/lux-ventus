import { type SchemaTypeDefinition } from "sanity";
import { pagesType } from "./documents/pagesType";
import { categoriesType } from "./documents/categoriesType";
import { headerType } from "./documents/headerType";
import { headerLink } from "./objects/headerLink";
import { hostsType } from "./documents/hostsType";
import { postsType } from "./documents/postsType";
import { heroSectionTypes } from "./objects/heroSectionTypes";
import { socialLinksType } from "./objects/socialLinksType";
import { TopicsSliderType } from "./objects/TopicsSliderType";
import { featurePostType } from "./objects/featurePostType";
import { trandingPostType } from "./objects/trandingPostType";
import { newsLetterCardType } from "./objects/newsLetterCardType";
import { topRatedPostsType } from "./objects/topRatedPostsType";
import { categotyCardType } from "./objects/categoryCardType";
import { leftPannelType } from "./documents/leftPannelType";
import { hostCardType } from "./objects/hostCardType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoriesType,
    headerType,
    headerLink,
    pagesType,
    hostsType,
    postsType,
    heroSectionTypes,
    socialLinksType,
    TopicsSliderType,
    featurePostType,
    trandingPostType,
    newsLetterCardType,
    topRatedPostsType,
    categotyCardType,
    leftPannelType,
    hostCardType
  ],
};
