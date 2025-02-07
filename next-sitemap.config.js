/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://nighte-minimal-portfolio.vercel.app', 
    generateRobotsTxt: true, // Generate robots.txt
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin'], // Exclude the /admin folder
            },
        ],
    },
    exclude: ['/admin', '/admin/*'], // Exclude /admin and all its subroutes from the sitemap
};
