'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const { wrap: async } = require('co');
const only = require('only');
const { respond, respondOrRedirect } = require('../utils');
const Article = mongoose.model('Article');
const assign = Object.assign;

exports.index = function (req, res) {

  respond(res, 'admin/index', {
    title: 'Admin'
  });
};
