[![npm version](https://badge.fury.io/js/js-seo-ingector.svg)](https://npmjs.com/package/js-seo-ingector) [![npm](https://img.shields.io/npm/dt/js-seo-ingector)](https://npmjs.com/package/js-seo-ingector) ![npm bundle size](https://img.shields.io/bundlephobia/min/js-seo-ingector) ![GitHub](https://img.shields.io/github/license/elius94/js-seo-ingector)

# js-seo-ingector
A Javascript command to automatically modify the main html file (like index.html) to add the provided SEO meta tags and more. Designed for Create React App.

## Usage
```bash
npx js-seo-ingector
```

## Options
 - --help                 Print this help message
 - --version              Print the version of this tool
 - --verbose              Print verbose output
 - --waitkey              Wait for a keypress before exiting
 - --base-path            The base path to the project (defaults to current working directory)
 - --build-dir            The build directory (defaults to build)
 - --file                 The file to inject the SEO data into (defaults to index.html)
 - --config               The config file to use (defaults to seo.json)
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
    "manifest": null
}
```

Then we can run the build script:
```bash
npn run build
```

and the seo tags will be injected into the index.html file.

