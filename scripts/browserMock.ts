import * as jsdom from "jsdom";

const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const document = dom.window.document;

const Element = dom.window.Element;
const Node = dom.window.Node;
const HTMLDivElement = dom.window.HTMLDivElement;
const HTMLElement = dom.window.HTMLElement;
const HTMLBRElement = dom.window.HTMLBRElement;
global.document = document;
global.Element = Element;
global.HTMLBRElement = HTMLBRElement;
global.HTMLElement = HTMLElement;
global.Node = Node;
global.HTMLDivElement = HTMLDivElement;
