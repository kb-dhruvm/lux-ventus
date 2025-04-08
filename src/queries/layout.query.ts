import { defineQuery } from "next-sanity";

export const HEADER_QUERY = defineQuery(`*[_type == "header"] | order(_updatedAt desc)[0]`)

export const LEFT_PANEL_QUERY = defineQuery(`*[_type == "leftPanel"] | order(_updatedAt desc)[0]`)