module.exports = {
    'strapi-neon-tech-db-branches': {
      enabled: true,
      config: {
        neonApiKey: "2bl16pcox5i4rex7b0ysfmft4suirwv8hp3a2gae6jdh52vw24ikf5x76sink4sn", // get it from here: https://console.neon.tech/app/settings/api-keys
        neonProjectName: "ecommerce-sochi", // the neon project under wich your DB runs
        neonRole: "neondb_owner", // create it manually under roles for your project first
        gitBranch: "main" //branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
      },
    },
  };