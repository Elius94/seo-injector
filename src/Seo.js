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

        const tags = [];

        if (title) {
            tags.push({
                tag: 'title',
                content: title
            });
            tags.push({
                tag: 'meta',
                attrs: {
                    name: 'title',
                    content: title
                }
            });
        }

        if (description) {
            tags.push({
                tag: 'meta',
                attrs: {
                    name: 'description',
                    content: description
                }
            });
        }

        if (keywords) {
            tags.push({
                tag: 'meta',
                attrs: {
                    name: 'keywords',
                    content: keywords
                }
            });
        }

        if (author) {
            tags.push({
                tag: 'meta',
                attrs: {
                    name: 'author',
                    content: author
                }
            });
        }

        if (openGraph) {
            const {
                url,
                title,
                description,
                image,
                site_name,
                type,
                locale
            } = openGraph;

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'og:url',
                    content: url
                }
            });

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'og:title',
                    content: title
                }
            });

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'og:description',
                    content: description
                }
            });

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'og:image',
                    content: image
                }
            });

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'og:site_name',
                    content: site_name
                }
            });

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'og:type',
                    content: type
                }
            });

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'og:locale',
                    content: locale
                }
            });
        }

        if (twitter) {
            const {
                image,
                url,
                card,
                title,
                description
            } = twitter;

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'twitter:image',
                    content: image
                }
            });

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'twitter:url',
                    content: url
                }
            });

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'twitter:card',
                    content: card
                }
            });

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'twitter:title',
                    content: title
                }
            });

            tags.push({
                tag: 'meta',
                attrs: {
                    property: 'twitter:description',
                    content: description
                }
            });
        }

        if (favicon) {
            tags.push({
                tag: 'link',
                attrs: {
                    rel: 'icon',
                    href: favicon
                }
            });
        }

        if (manifest) {
            tags.push({
                tag: 'link',
                attrs: {
                    rel: 'manifest',
                    href: manifest
                }
            });
        }

        let htmlString = '';

        tags.forEach(tag => {
                    switch (tag.tag) {
                        case 'title':
                            htmlString += `<title>${tag.content}</title>`;
                            break;
                        case 'meta':
                            htmlString += `<meta ${Object.keys(tag.attrs).map(key => `${key}="${tag.attrs[key]}"`).join(' ')} />`;
                break;
            case 'link':
                htmlString += `<link ${Object.keys(tag.attrs).map(key => `${key}="${tag.attrs[key]}"`).join(' ')} />`;
                break;
            default:
                break;
        }
    });

    return htmlString;
};

module.exports = GetHtmlSEOString;