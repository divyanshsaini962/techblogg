const siteUrl = "https://www.techblogservice.online"
module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
          {
            userAgent: '*',
            allow: '/',
          },
          {
            userAgent: '*', 
            disallow: '/api/',
          }, 
          {
            userAgent: '*',
            allow: '/images/',
          },
          {
            userAgent: '*',
            disallow: '/admin/',
          }
        ],
      },
    exclude: ["/<page-url>"]
  }