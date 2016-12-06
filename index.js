const urlArray = require("./image-array.js").urlArray;

const randomUrl = urlArray[Math.floor(Math.random() * urlArray.length)];
const background = '#5a5a5a';
const css = `
    body:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: 0.3;
        background-image: url('` + randomUrl + `');
        background-repeat: no-repeat;
        background-position: 50% 0;
        -ms-background-size: cover;
        -o-background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        background-size: cover;
    }`;

exports.decorateConfig = config =>
  Object.assign({}, config, {
    css: config.css ? config.css + css : css,
    backgroundColor: background
  });