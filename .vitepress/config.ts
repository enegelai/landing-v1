import { defineConfig, HeadConfig } from 'vitepress';
import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { SitemapStream } from 'sitemap';
import vue from '@vitejs/plugin-vue';

const links: any[] = [];

export default defineConfig({
  title: 'CX',
  description: 'Delivering Great Customer Experience Assured by Generative AI',
  srcDir: '.',
  srcExclude: ['**/README.md', '**/TODO.md'],
  outDir: './dist',
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  },
  markdown: {
    headers: {
      level: [2, 6]
    }
  },
  appearance: false, // TODO Enable this back when dark mode is fully supported
  cleanUrls: true,
  head: [
    /* TODO Twitter
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],*/
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-9YYSL8KCZV'
      }
    ],
    [
      'script',
      {
        src: '//js.hsforms.net/forms/embed/v2.js'
      }
    ],
    ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-9YYSL8KCZV');"],
    /*
    [
      'script',
      {
        async: '',
        src: 'https://cdn.jsdelivr.net/npm/@enegelai/bot-widget@latest/dist/index.umd.js',
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@enegelai/bot-widget@latest/dist/index.css'
      }
    ],
    */
    [
      'script',
      {
        async: '',
        src: '/bot/index.umd.js',
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/bot/index.css'
      }
    ],
  ],
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      });
  },
  // generates sitemap
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://www.enegel.ai/'
    });
    const writeStream = createWriteStream(path.resolve(outDir, 'sitemap.xml'));
    sitemap.pipe(writeStream);
    links.forEach((link) => sitemap.write(link));
    sitemap.end();
    await new Promise((r) => writeStream.on('finish', r));
  },
  transformHead: ({page, pageData})=>{
    //console.log(`transformHead: ${JSON.stringify(page)}`);

    const head: HeadConfig[] = []

    // Generate canonical link
    //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
    const base = 'https://www.enegel.ai';
    const u = page.replace('index.md','').replace('.md','').trim();
    let cu = base;
    if(u.length>0){
      cu += '/' + u;
    }
    console.log(`transformHead: ${JSON.stringify(page)} => canonical: ${cu}`);

    head.push(['link', {rel: 'canonical', href: cu}]);
    head.push(['meta', {property: 'og:type', content: 'article'}])
    head.push(['meta', {property: 'og:url', content: cu}])
    head.push(['meta', {name: 'twitter:card', content: 'summary_large_image'}])
    head.push(['meta', {name: 'twitter:domain', content: 'enegel.ai'}])
    head.push(['meta', {name: 'twitter:url', content: cu}])

    if(pageData?.frontmatter?.title) {
      head.push(['meta', {property: 'og:title', content: pageData.frontmatter.title}])
      head.push(['meta', {name: 'twitter:title', content: pageData.frontmatter.title}])
    }

    if(pageData?.frontmatter?.description) {
      head.push(['meta', {property: 'og:description', content: pageData.frontmatter.description}])
      head.push(['meta', {name: 'description', content: pageData.frontmatter.description}])
      head.push(['meta', {name: 'twitter:description', content: pageData.frontmatter.description}])
    }

    if(pageData?.frontmatter?.keywords) {
      head.push(['meta', {name: 'keywords', content: pageData.frontmatter.keywords}])
    }

    if(pageData?.frontmatter?.image) {
      head.push(['meta', {property: 'og:image', content: base+pageData.frontmatter.image}])
      head.push(['meta', {name: 'twitter:image', content: base+pageData.frontmatter.image}])
    }else{
      head.push(['meta', {property: 'og:image', content: base+'/img/enegelai.png'}])
      head.push(['meta', {name: 'twitter:image', content: base+'/img/enegelai.png'}])
    }


    return head

  }
});
