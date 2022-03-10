[![npm version](https://badge.fury.io/js/js-seo-ingector.svg)](https://npmjs.com/package/js-seo-ingector) [![npm](https://img.shields.io/npm/dt/js-seo-ingector)](https://npmjs.com/package/js-seo-ingector) ![npm bundle size](https://img.shields.io/bundlephobia/min/js-seo-ingector) ![GitHub](https://img.shields.io/github/license/elius94/js-seo-ingector) [![Node.js Package](https://github.com/Elius94/js-seo-ingector/actions/workflows/release-package.yml/badge.svg)](https://github.com/Elius94/js-seo-ingector/actions/workflows/release-package.yml)

# js-seo-ingector
A Javascript command to automatically modify the main html file (like index.html) to add the provided SEO meta tags and more. Designed for Create React App.
For example you can use it to add on the build time the following meta tags: title, description, open graph, twitter, icons and more.

 [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=elius94&repo=js-seo-ingector&theme=github_dark&show_icons=true)](https://github.com/Elius94/js-seo-ingector) [![https://nodei.co/npm/js-seo-ingector.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/js-seo-ingector.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/js-seo-ingector)

## Usage
```bash
npx js-seo-ingector
```

## Demostration

Example with --pretty:

Before:
![image](https://user-images.githubusercontent.com/14907987/157652223-1de86b32-212a-4457-9ee3-5a54cd3ddc8a.png)

After:
![image](https://user-images.githubusercontent.com/14907987/157652468-5217c94e-2825-4945-8e2d-7425d50b3116.png)

## Options
 - --help                 Print this help message
 - --version              Print the version of this tool
 - --verbose              Print verbose output (default: false)
 - --waitkey              Wait for a keypress before exiting (default: false)
 - --base-path            The base path to the project (default: process.cwd())
 - --build-dir            The build directory (default: build)
 - --file                 The file to inject the SEO data into (default: index.html)
 - --config               The config file to use (default: seo.json)
 - --pretty               Pretty print the output (defaults: false)
 - --example              Use the example config file

## Using with Create React App (CRA)
In a standard CRA project, we have to add seo html tags into the production build index.html file.

To make it automatic, we can edit the package.json file at the build script:

from this:
```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},
```
to this:
```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build && npx js-seo-ingector",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},
```

And then we have to create a seo.json file in the same directory as the package.json file.

Example json file (seo.json):

```json
{
    "title": "Example Title",
    "description": "Example Description",
    "keywords": "Example Keywords",
    "author": "Example Author",
    "openGraph": {
        "url": "https://example.com",
        "title": "Example Title",
        "description": "Example Description",
        "image": "https://example.com/image.jpg",
        "site_name": "Example Site Name",
        "type": "website",
        "locale": "it_IT"
    },
    "twitter": {
        "image": "https://example.com/image.jpg",
        "url": "https://example.com",
        "card": "summary_large_image",
        "title": "Example Title",
        "description": "Example Description"
    },
    "favicon": null,
    "manifest": null,
    "icons": [{
            "src": "https://example.com/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "https://example.com/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

Then we can run the build script:
```bash
npn run build
```
and the seo tags will be injected into the ./build/index.html file.

## Json Schema (types and formats) for the config file

### Tags
##### title 
type: <font color="salmon">*string*</font>
required: <font color="salmon">*true*</font>
result: 
```html
<title>Example Title</title>
<meta name="title" content="Example Title">
```

##### description
type: <font color="salmon">*string*</font>
required: <font color="salmon">*true*</font>
result:    
```html
<meta name="description" content="Example Description">
```

##### keywords
type: <font color="salmon">*string*</font>
required: <font color="salmon">*true*</font>
result:
```html
<meta name="keywords" content="Example Keywords">
```

##### author
type: <font color="salmon">*string*</font>
required: <font color="salmon">*true*</font>
result:
```html
<meta name="author" content="Example Author">
```

##### openGraph:
type: <font color="salmon">*object*</font>
required: <font color="salmon">*false*</font>
props:
 - <font color="orange">*url*</font>
 - <font color="orange">*title*</font>
 - <font color="orange">*description*</font>
 - <font color="orange">*image*</font>
 - <font color="orange">*site_name*</font>
 - <font color="orange">*type*</font>
 - <font color="orange">*locale*</font>

result:
```html
    <meta property="og:url" content="https://example.com">
    <meta property="og:title" content="Example Title">
    <meta property="og:description" content="Example Description">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:site_name" content="Example Site Name">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="it_IT">
```

##### twitter:
type: <font color="salmon">*object*</font>
required: <font color="salmon">*false*</font>
props:
 - <font color="orange">*image*</font>
 - <font color="orange">*url*</font>
 - <font color="orange">*card*</font>
 - <font color="orange">*title*</font>
 - <font color="orange">*description*</font>

result:
```html
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://example.com">
    <meta name="twitter:title" content="Example Title">
    <meta name="twitter:description" content="Example Description">
    <meta name="twitter:image" content="https://example.com/image.jpg">
```

##### favicon
type: <font color="salmon">*string*</font>
required: <font color="salmon">*false*</font>
result:
```html
<link rel="icon" href="./favicon.ico" />
```

##### manifest
type: <font color="salmon">*string*</font>
required: <font color="salmon">*false*</font>
result:
```html
<link rel="manifest" href="./manifest.json" />
```

##### icons
type: <font color="salmon">*array*</font>
required: <font color="salmon">*false*</font>
content:
type: <font color="orange">*object*</font>
props:
 - <font color="orange">*src*</font> (required)
 - <font color="orange">*sizes*</font> (required)
 - <font color="orange">*type*</font> (required)

result:
```html
<link rel="icon" sizes="192x192" href="./icon-192.png" />
<link rel="icon" sizes="512x512" href="./icon-512.png" />
```

##### custom
description: <font color="gray">*In this field you can put what you want*</font>
type: <font color="salmon">*array*</font>
required: <font color="salmon">*false*</font>
content:
type: <font color="orange">*object*</font>
props:
 - <font color="orange">*tag*</font> - the tag name (e.g. meta, link, script)
 - <font color="orange">*children*</font> - the content of the tag (inside the tag)
 - <font color="orange">*attrs*</font> - the attributes of the tag (e.g. name, content, etc.)

result (example):
```html
<meta name="custom" content="custom-value">
```

or in case of this example:
```json
"custom": [{
    "tag": "script",
    "children": "if (window.location.hostname === 'example.com') { window.location.hostname = 'example.com'; }"
}]
```

```html
<script>
    if (window.location.hostname === 'example.com') { window.location.hostname = 'example.com'; }
</script>
```

## Additional information
This tool does not check if the tags are already present in the html file. It will inject the tags in the html file before the closing head tag.

## License
This tool is licensed under the MIT license.
Author: [Elia Lazzari]("https://www.github.com/elius94")
