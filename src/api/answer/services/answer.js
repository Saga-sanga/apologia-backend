const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::answer.answer');
