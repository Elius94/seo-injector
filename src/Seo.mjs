const GetHtmlSEOString = async(props) => {
    const {
        title,
        description,
        keywords,
        author,
        openGraph,
        twitter,
        favicon,
        manifest
    } = props;

    const meta = [{
            name: 'title',
            content: title
        },
        {
            name: 'description',
            content: description
        },
        {
            name: 'keywords',
            content: keywords
        },
        {
            name: 'author',
            content: author
        },
        {
            name: 'og:title',
            content: title
        },
        {
            name: 'og:description',
            content: description
        },
        {
            name: 'og:image',
            content: openGraph.image
        },
        {
            name: 'og:url',
            content: openGraph.url
        },
        {
            name: 'og:type',
            content: openGraph.type
        },
        {
            name: 'og:site_name',
            content: openGraph.site_name
        },
        {
            name: 'og:locale',
            content: openGraph.locale
        },
        {
            name: 'twitter:card',
            content: twitter.card
        },
        {
            name: 'twitter:url',
            content: twitter.url
        },
        {
            name: 'twitter:title',
            content: twitter.title
        },
        {
            name: 'twitter:description',
            content: description
        },
        {
            name: 'twitter:image',
            content: twitter.image
        }
    ];

    const link = [{
            rel: 'icon',
            href: favicon
        },
        {
            rel: 'manifest',
            href: manifest
        }
    ];

    let htmlString = '';
    meta.forEach(meta => {
        htmlString += `<meta name="${meta.name}" content="${meta.content}">`;
    });
    link.forEach(link => {
        htmlString += `<link rel="${link.rel}" href="${link.href}">`;
    });

    return htmlString;
};

export default {
    GetHtmlSEOString
};