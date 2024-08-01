import { Client } from "@notionhq/client";

const client: Client = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async function (database_id: Readonly<string>) {
    const response = await client.databases.query({
        database_id: database_id 
    })
    return response.results;
};