const fs = require("fs");
const path = require("path");
const jsdom = require("mocha-jsdom");
const babel = require("@babel/core");
const chai = require("chai");

global.expect = chai.expect;

const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);

const { code } = babel.transformFileSync(
  path.resolve(__dirname, "..", "index.js"),
  {
    presets: ["@babel/preset-env"],
  }
);

jsdom({
  html,
  src: code,
  url: "http://localhost",
});
