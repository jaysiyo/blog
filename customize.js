/* Customization Guide available on:
  https://gatsby-blog-mdx.now.sh/2020/05/4-customize/
  ======================================== */
const config = {
  /* Site
  ========================================= */
  title: `개인 블로그`,                      // Displayed in header
  description: `This is my blog`,     // Site description
  maxWidth: "768px",                  // Max width of website
  enableAbout: false,                  // Enables about page
  siteUrl: `https://blog.jaysiyo.com/`, // For sitemap & RSS feed
  useScrollIndicator: true,           // Use scroll indicator on top of screen in posts

  /* Profile
  ========================================= */
  author: `개인 블로그`,                             // Name shows on profile
  profileDescription: "Jeon",   // Shows under author name
  profileImageName: `profile-pic.jpg`,                  // Place profile.jpg/.jpeg/.png in _assets folder
  location: "",                                      // Location under profileDescription. "" --> disabled
  footerLink: "",                                    // Link to page when you click footer name

  /* Social Media Links
      accountName & emailAddress: leave blank ("") to disable
      showHeaderIcon: shows social media icon in header. When true, must have account name set
  ========================================= */
  socialMediaLinks: {
    email:     { emailAddress: "", showHeaderIcon: true },
    github:    { accountName: "jaysiyo", showHeaderIcon: true },
    facebook:  { accountName: "", showHeaderIcon: false },
    instagram: { accountName: "", showHeaderIcon: false },
    twitter:   { accountName: "", showHeaderIcon: false },
    linkedIn:  { accountName: "", showHeaderIcon: false },   // Use URL after "linkedin.com/"
    medium:    { accountName: "", showHeaderIcon: false },   // Use URL after "medium.com/@"
  },

  /* Social Media Share Buttons--available below every post
  ========================================= */
  shareButtons: { email: false, facebook: false, twitter: false, reddit: false, linkedIn: false },

  /* Comments
  ========================================= */
  comments: {
    facebook: { enabled: false, appId: "" },      // appId: optional, but used to moderate fb comments
    disqus: { enabled: false, shortName: "" },   // Check your shortName on https://disqus.com
    utterances: { enabled: false, repoUrl: "" }, // i.e. 'ellismin/gatsby-blog-mdx'
  },

  /* More Custom Settings
  ========================================= */
  defaultTheme: "light",                      // Options: dark / light -- applied to first visitors
  showTimeToRead: false,                      // Shows time to read for each post in main page
  breakCodeLines: false,                      // Breaks long code lines instead of having horizontal scroll
  faviconSrc: `_assets/icon-code.png`,        // Favicon
  gaTrackingId: ``,                           // Your google analytics tracking id--i.e. UA-*****
  googleAdSenseId: ``,                        // Your google AdSense client id--i.e. ca-pub-****
}

module.exports = config
