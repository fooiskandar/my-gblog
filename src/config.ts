import type { NavigationLink, Site } from './types.ts'

export const SITE: Site = {
    author: 'FoO Iskandar',
    url: 'https://iskandar.pro.mk',
    title: 'Iskandar PRO MK.',
    description: 'Personal blog ngawur dan ngasal.',
    shortDescription: 'Personal blog',
}

export const NavigationLinks: NavigationLink[] = [
    { name: 'Artikel', url: '/posts' },
    { name: 'Kategori', url: '/categories' },
    { name: 'Timeline', url: '/timeline' },
    { name: 'Blogroll', url: '/friends' },
    { name: 'Tentang Kami', url: '/about' },
    { name: 'Kontak', url: '/contact' },
]

export const FooterLinks = [
    {
        section: 'Blog',
        links: [
            { name: 'Artikel', url: '/posts' },
            { name: 'Timeline', url: '/timeline' },
            { name: 'Kategori', url: '/categories' },
            { name: 'Tentang Kami', url: '/about' },
            { name: 'Kontak', url: '/contact' },
        ],
    },
    {
        section: 'Other',
        links: [
            { name: 'RSS', url: '/rss.xml' },
            { name: 'Site Map', url: '/sitemap-index.xml' },
            { name: 'Twitter', url: 'https://x.com/fooiskandar05' },
        ],
    },
]

export const Settings = {
    GoogleAnalytics: {
        enable: false,
        id: 'G-XPFK4QHTSJ',
    },

    // See https://github.com/umami-software/umami
    UmamiAnalytics: {
        enable: true,
        dataWebsiteID: 'bf63658a-9418-4f39-a6a1-5a0cedb6e429',
    },

    Comment: {
        // todo: should I use meta or process?
        // process reports an error when used locally,
        // and meta cannot retrieve environment variables in Cloudflare environment.
        // enable: !!(import.meta.env.COMMENT_ENABLE),
        enable: !!(process.env.COMMENT_ENABLE),

        // please visit https://giscus.app/ to learn how to configure it.
        // You can also check out this article: https://liruifengv.com/posts/add-comments-to-astro/.
        giscus: {
            repo: 'fooiskandar/my-gblog',
            repoId: 'R_kgDOOQiHBw',
            category: 'Announcements',
            categoryId: 'DIC_kwDOOQiHB84CpM4G',
            darkThem: 'noborder_gray',
            lightThem: 'light',
        },
    },

    Assets: {
        // If you don't want to upload the build assert(image/js/css/etc...) to anywhere, just set this to false
        uploadAssetsToS3: !!(process.env.S3_ENABLE),
        config: {
            // see https://github.com/syhily/astro-uploader to get how to configure the uploader,
            // The following configuration will upload the compiled `assets` folder to S3 or R2.
            // You can set a separate domain for it so that you can access all resources using a CDN domain name.
            //
            // For example: https://images.godruoyi.com/gblog/assets/brand-logo.webp
            //
            // Note that you may also need to modify `build.assetsPrefix` in `astro.config.mjs` if you want to
            // automatically replace all images/js/css with a CDN link.
            paths: ['assets'],
            endpoint: process.env.S3_ENDPOINT as string,
            bucket: process.env.S3_BUCKET as string,
            accessKey: process.env.S3_ACCESS_KEY as string,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
            root: 'gblog',
        },
    },
}

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'inLanguage': 'id',
        '@id': SITE.url,
        'url': SITE.url,
        'name': SITE.title,
        'description': SITE.description,
        'isPartOf': {
            '@type': 'WebSite',
            'url': SITE.url,
            'name': SITE.title,
            'description': SITE.description,
        },
    },
}
