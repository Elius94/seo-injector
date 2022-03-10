// Test the basic functionality of the program
const fs = require('fs');
const exec = require('child_process').exec;
const expect = require('chai').expect;

const PATH = process.cwd() + '/test';

describe('Test the basic functionality of the program', (done) => {
    it('should copy the "original_index.html file into ./build/index.html', (done) => {
        fs.copyFile(`${PATH}/original_index.html`, `${PATH}/build/index.html`, (err) => {
            if (err) throw err;
            console.log('File was copied to destination');
        });
        done();
    });
    it("should execute the script in this directory", (done) => {
        exec(`node ./src/index.js --pretty --base-path ${PATH}`, (err, stdout, stderr) => {
            if (err) throw err;
            console.log(stdout);
            console.log('Script executed');
            done();
        });
    });
    it("should test if every json item is becamed an html tag", (done) => {
        // Read the seo.json file
        fs.readFile(`${PATH}/seo.json`, 'utf8', (err, data) => {
            if (err) throw err;
            // Parse the json file
            const json = JSON.parse(data);
            // Get the html file
            fs.readFile(`${PATH}/build/index.html`, 'utf8', (err, data) => {
                if (err) throw err;
                // Parse the html file
                const html = data;
                // Test if every json item is becamed an html tag
                Object.keys(json).forEach((key) => {
                    switch (key) {
                        case 'title':
                            expect(html).to.contain(`<title>${json[key]}</title>`);
                            break;
                        case 'description':
                            expect(html).to.contain(`<meta name="description" content="${json[key]}">`);
                            break;
                        case 'keywords':
                            expect(html).to.contain(`<meta name="keywords" content="${json[key]}">`);
                            break;
                        case 'author':
                            expect(html).to.contain(`<meta name="author" content="${json[key]}">`);
                            break;
                        case 'openGraph':
                            expect(html).to.contain(`<meta property="og:title" content="${json[key].title}">`);
                            expect(html).to.contain(`<meta property="og:description" content="${json[key].description}">`);
                            expect(html).to.contain(`<meta property="og:image" content="${json[key].image}">`);
                            break;
                        case 'twitter':
                            expect(html).to.contain(`<meta property="twitter:title" content="${json[key].title}">`);
                            expect(html).to.contain(`<meta property="twitter:description" content="${json[key].description}">`);
                            expect(html).to.contain(`<meta property="twitter:image" content="${json[key].image}">`);
                            break;
                        default:
                            break;
                    }
                });
                done();
            });
        });
    });
});