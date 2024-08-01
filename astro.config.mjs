import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: "https://mindulace.social",
    integrations: [
        tailwind(),
        sitemap({
            customPages: [
                'https://mindulace.social/github',
                'https://mindulace.social/instagram',
                'https://mindulace.social/twitter',
                'https://mindulace.social/x',
                'https://mindulace.social/instagram-creative',
            ]
        }),
    ],
    redirects: {
        '/github': 'https://github.com/mindulace',
        '/instagram': 'https://instagram.com/mindulace/',
        '/twitter': 'https://twitter.com/mindulace',
        '/x': 'https://twitter.com/mindulace',
        '/instagram-creative': 'https://instagram.com/dot.mind/',
    }
});
