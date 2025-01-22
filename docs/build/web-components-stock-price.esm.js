import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-ac75c0d2.js';
export { s as setNonce } from './index-ac75c0d2.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.24.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? Array.from(doc.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["md-stock-finder",[[1,"md-stock-finder",{"searchResponse":[32],"error":[32]}]]],["md-stock-price",[[1,"md-stock-price",{"stockSymbol":[1,"stock-symbol"],"objResponse":[32],"stockUserInput":[32],"stockInputValid":[32],"error":[32],"loading":[32]},[[16,"mdsymbolSelected","onStockSymbolSelected"]],{"stockSymbol":["stockSymbolChanged"]}]]]], options);
});

//# sourceMappingURL=web-components-stock-price.esm.js.map