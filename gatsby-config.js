module.exports = {
  siteMetadata: {
    title: 'Cretan Organic Wines',
    siteUrl: 'https://archaneswinery.com',
    description: 'Website Winery Sinadinakis',
    author: '@Sinadinakis',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-background-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-preact',
    'gatsby-plugin-htaccess',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Indie+Flower`,
          `Open+Sans`,
          `Nunito+Sans`,
          `Dancing+Script`,
          `allan`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/winery.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelistPatterns: [/^form-input/, /^toggle/], // Don't remove this selector
        ignore: ['node_modules', './src/assets/styles/forms.css'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `el`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
  ],
};
