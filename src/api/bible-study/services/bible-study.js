'use strict';

/**
 * bible-study service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bible-study.bible-study');
