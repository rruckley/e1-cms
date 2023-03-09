'use strict';

/**
 * knowledge-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::knowledge-article.knowledge-article');
