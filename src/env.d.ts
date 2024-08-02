/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly DIRECTUS_URL: string;
    readonly CF_ACCESS_CLIENT_ID: string;
    readonly CF_ACCESS_CLIENT_SECRET: string;
}