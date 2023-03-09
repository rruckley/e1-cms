'use strict';

/**
 * knowledge-home service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::knowledge-home.knowledge-home');
