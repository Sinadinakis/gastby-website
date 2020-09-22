/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// Implement the Gatsby API "onCreatePage". This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, createRedirect, deletePage } = actions;
  createRedirect({
    fromPath: '/archanes.html',
    toPath: '/story',
    isPermanent: true,
    redirectInBrowse: true,
  });

  deletePage(page);
  // You can access the variable "locale" in your page queries now
  createPage({
    ...page,
    path: page.path.toLowerCase(),
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  });

  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page };
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1];
    page.matchPath = `/${langCode}/*`;
    // Recreate the modified page
    deletePage(oldPage);
    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig();
  config.node = {
    fs: 'empty',
  };
};
