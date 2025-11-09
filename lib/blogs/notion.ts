import "server-only";

import { Client } from "@notionhq/client";
import {
    BlockObjectResponse,
    PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { NotionPageParser } from "./notion-parser";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const fetchAllPages = React.cache(async () => {
    if (!process.env.NOTION_DATABASE_ID || !process.env.NOTION_TOKEN) {
        throw new Error(
            "Missing NOTION_DATABASE_ID or NOTION_SECRET environment variables"
        );
    }

    const { results } = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: "Status",
            status: {
                equals: "Live",
            },
        },
    });
    const pages = results
        .filter((page): page is PageObjectResponse => page.object === "page")
        .map((page) => NotionPageParser.normalizePage(page));

    return pages;
});

export const fetchBySlug = React.cache((slug: string) => {
    if (!slug) {
        console.error("slug is undefined");
        return undefined;
    }

    return notion.databases
        .query({
            database_id: process.env.NOTION_DATABASE_ID!,
            filter: {
                property: "slug",
                rich_text: {
                    equals: slug,
                },
            },
        })
        .then((res) => res.results[0] as PageObjectResponse | undefined).then((page) => {
            if (!page) {
                return undefined;
            }
            return NotionPageParser.normalizePage(page);
        }).catch((error) => {
            console.error(error);
            return undefined;
        });
})

export const fetchPageBlocks = React.cache((pageId: string) => {
    return notion.blocks.children
        .list({
            block_id: pageId,
        })
        .then((res) => res.results as BlockObjectResponse[]);
});
