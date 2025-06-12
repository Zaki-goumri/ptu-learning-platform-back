// packages/prosemirror-trailing-node/src/trailing-node-plugin.ts
import { Plugin, PluginKey } from "prosemirror-state";
var trailingNodePluginKey = new PluginKey("trailingNode");
function trailingNode(options) {
  const { ignoredNodes = [], nodeName = "paragraph" } = options ?? {};
  const ignoredNodeNames = /* @__PURE__ */ new Set([...ignoredNodes, nodeName]);
  let type;
  let types;
  return new Plugin({
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
export {
  trailingNode
};
