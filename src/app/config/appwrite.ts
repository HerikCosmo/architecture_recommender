import { Client, TablesDB } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const db = new TablesDB(client);

export { client, db };

export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
export const STORAGE_ID = '';
