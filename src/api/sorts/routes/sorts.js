'use strict';

/**
 * sorts router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sorts.sorts');
