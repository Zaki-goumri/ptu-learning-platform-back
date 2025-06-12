"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// packages/prosemirror-trailing-node/src/index.ts
var src_exports = {};
__export(src_exports, {
  trailingNode: () => trailingNode
});
module.exports = __toCommonJS(src_exports);

// packages/prosemirror-trailing-node/src/trailing-node-plugin.ts
var import_prosemirror_state = require("prosemirror-state");
var trailingNodePluginKey = new import_prosemirror_state.PluginKey("trailingNode");
function trailingNode(options) {
  const { ignoredNodes = [], nodeName = "paragraph" } = options ?? {};
  const ignoredNodeNames = /* @__PURE__ */ new Set([...ignoredNodes, nodeName]);
  let type;
  let types;
  return new import_prosemirror_state.Plugin({
    key: trailingNodePluginKey,
    appendTransaction(_, __, state) {
      const { doc, tr } = state;
      const shouldInsertNodeAtEnd = trailingNodePluginKey.getState(state);
      const endPosition = doc.content.size;
      if (!shouldInsertNodeAtEnd) {
        return;
      }
      return tr.insert(endPosition, type.create());
    },
    state: {
      init: (_, { doc, schema }) => {
        const nodeType = schema.nodes[nodeName];
        if (!nodeType) {
          throw new Error(`Invalid node being used for trailing node extension: '${nodeName}'`);
        }
        type = nodeType;
        types = Object.values(schema.nodes).map((node) => node).filter((node) => !ignoredNodeNames.has(node.name));
        return types.includes(doc.lastChild?.type);
      },
      apply: (tr, value) => {
        if (!tr.docChanged) {
          return value;
        }
        return types.includes(tr.doc.lastChild?.type);
      }
    }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  trailingNode
});
