const {snackUrl} = require('./snackUrl');
const allowlist = new Set(require('./allowlist'));

function attribute(name, value) {
  return {type: 'mdxJsxAttribute', name, value};
}

/**
 * Adds an "Open in Snack" button above the code of example pages listed in `allowlist.js`.
 */
module.exports = function remarkSnackLink() {
  return (tree, file) => {
    const relPath = file.data.frontMatter?.custom_props?.example_rel_path;
    if (!allowlist.has(relPath)) return;

    const index = tree.children.findIndex((node) => node.type === 'code');
    if (index < 0) return;
    const url = snackUrl(relPath, tree.children[index].value);
    if (!url) {
      throw new Error(`${relPath} is in the Snack allowlist but imports files the Snack can't load`);
    }

    tree.children.splice(index, 0, {
      type: 'mdxJsxFlowElement',
      name: 'p',
      attributes: [],
      children: [
        {
          type: 'mdxJsxTextElement',
          name: 'a',
          attributes: [
            attribute('className', 'button button--primary button--sm'),
            attribute('href', url),
            attribute('target', '_blank'),
            attribute('rel', 'noopener noreferrer'),
            attribute('title', 'Runs the web version of this example in Expo Snack'),
          ],
          children: [{type: 'text', value: 'Open in Snack'}],
        },
      ],
    });
  };
};
