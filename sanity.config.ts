"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { presentationTool } from "sanity/presentation";
import { resolve } from "@/sanity/presentation/resolve";
import { media } from "sanity-plugin-media";
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget
} from "@sanity/dashboard";

export default defineConfig([
  {
    name: "lux-ventus",
    title: "Lux Ventus",
    basePath: "/studio",
    projectId,
    dataset,
    // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema,
    plugins: [
      dashboardTool({
        widgets: [
          projectInfoWidget(),
          projectUsersWidget(),
        ],
      }),
      media(),
      presentationTool({
        resolve,
        previewUrl: {
          previewMode: {
            enable: "/api/draft-mode/enable",
          },
        },
      }),
      structureTool({ structure }),
      // Vision is for querying with GROQ from inside the Studio
      // https://www.sanity.io/docs/the-vision-plugin
      visionTool({ defaultApiVersion: apiVersion }),
    ],
    tools: (prev, { currentUser }) => {
      const isAdmin = currentUser?.roles.some(
        (role) => role.name === "administrator"
      );

      if (isAdmin) {
        return prev;
      }

      return prev.filter((tool) => tool.name !== "vision");
    },
  },
]);
