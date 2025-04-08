import { ImageRule } from "sanity";
import { getExtension } from "@sanity/asset-utils";

export const imageFieldValidation = (rule: ImageRule) =>
  rule.required().custom((value) => {
    if (!value?.asset) {
      return true;
    }

    const filetype = getExtension(value.asset._ref);

    if (filetype !== "jpg" && filetype !== "png" && filetype !== "webp" && filetype !== "svg") {
      return "Image must be a JPG or PNG";
    }

    return true;
  });
