const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hero.hero');