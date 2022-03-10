const GetHtmlSEOString = async (props, pretty) => {
    const {
        title,
        description,
        keywords,
        author,
        openGraph,
        twitter,
        favicon,
        manifest,
        icons,
        custom,
    } = props;

    const tags = [];

    if (title) {
        tags.push({
            tag: 'title',
            _children: title
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

    if (icons) {
        icons.forEach(icon => {
            tags.push({
                tag: 'link',
                attrs: {
                    rel: 'icon',
                    href: icon.src,
                    sizes: icon.sizes
                }
            });
        });
    }

    if (custom) {
        custom.forEach(tag => {
            tags.push({
                tag: tag.tag,
                _children: tag.children,
                attrs: tag.attrs
            })
        });
    }

    let htmlString = '';
    const newLine = pretty ? '\n' : '';
    const indent = pretty ? '    ' : '';
    if (pretty) {
        htmlString += `${indent}<!------------------------------ SEO ------------------------------>`;
        htmlString += newLine;
    }

    tags.forEach(tag => {
        if (tag._children && tag.attrs) {
            htmlString += `${indent}<${tag.tag} ${Object.keys(tag.attrs).map(key => `${key}="${tag.attrs[key]}"`).join(' ')}>${tag._children}</${tag.tag}>${newLine}`;
        } else if (tag._children && !tag.attrs) {
            if (tag.tag === 'script') {
                htmlString += `${indent}<${tag.tag}>\n${indent}${indent}${tag._children}\n${indent}</${tag.tag}>${newLine}`;
            } else {
                htmlString += `${indent}<${tag.tag}>${tag._children}</${tag.tag}>${newLine}`;
            }
        } else if (tag.attrs && !tag._children) {
            htmlString += `${indent}<${tag.tag} ${Object.keys(tag.attrs).map(key => `${key}="${tag.attrs[key]}"`).join(' ')} />${newLine}`;
        } else {
            htmlString += `${indent}<${tag.tag} />${newLine}`;
        }
    });

    if (pretty) {
        htmlString += `${indent}<!------------------------------ SEO ------------------------------>`;
        htmlString += newLine;
    }

    return htmlString;
};

module.exports = GetHtmlSEOString;