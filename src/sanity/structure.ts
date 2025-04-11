import type { StructureResolver } from "sanity/structure";
import { UsersIcon } from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("content")
    .items([
      S.documentTypeListItem("pages").title("Pages"),
      S.divider(),
      S.documentTypeListItem("categories").title("Categories"),
      S.documentTypeListItem("posts").title("Posts"),
      S.divider(),
      S.documentTypeListItem("header").title("Header"),
      S.documentTypeListItem("leftPannel").title("Left Pannel"),
      S.divider(),
      S.documentTypeListItem("hosts").title("Hosts / Authors").icon(UsersIcon),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "pages",
            "posts",
            "categories",
            "hosts",
            "header",
            "leftPannel",
          ].includes(item.getId()!)
      ),
    ]);
