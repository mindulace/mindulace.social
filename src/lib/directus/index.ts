import { createDirectus, rest } from '@directus/sdk';
import type { RequestTransformer } from '@directus/sdk';

type SocialMedia = {
    url: string
};

type Schema = {
    socialMedias: SocialMedia[]
};

const requestTransformer: RequestTransformer = (options) => {
    options.headers = new Headers(options.headers);

    if (import.meta.env.CF_ACCESS_CLIENT_ID && import.meta.env.CF_ACCESS_CLIENT_SECRET) {
        options.headers.set('CF-Access-Client-Id', import.meta.env.CF_ACCESS_CLIENT_ID);
        options.headers.set('CF-Access-Client-Secret', import.meta.env.CF_ACCESS_CLIENT_SECRET);
    }

    return options;
}

const directus = createDirectus<Schema>(import.meta.env.DIRECTUS_URL).with(rest({
    onRequest: requestTransformer
}));

export default directus;