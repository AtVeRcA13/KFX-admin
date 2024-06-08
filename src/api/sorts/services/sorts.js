'use strict';

/**
 * sorts service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sorts.sorts');
