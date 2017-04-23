'use strict';

/**
 * Module dependencies.
 */

const path = require('path');

const notifier = {
  service: 'postmark',
  APN: false,
  email: true, // true
  actions: ['comment'],
  tplPath: path.join(__dirname, '..', 'app/mailer/templates'),
  key: 'POSTMARK_KEY'
};

const server_type = process.env.SERVER_TYPE || 'http';
const server_name = process.env.SERVER_NAME || 'localhost';
const url_protocol = server_type === 'http' ? 'http' : 'https';
const url_prefix = `${url_protocol}://${server_name}`;

module.exports = {
  root: path.join(__dirname, '..'),
  notifier: notifier,
  db: process.env.MONGO_URI,
  facebook: {
    clientID: process.env.FACEBOOK_CLIENTID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: `${url_prefix}/auth/facebook/callback`
  },
  twitter: {
    clientID: process.env.TWITTER_CLIENTID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackURL: `${url_prefix}/auth/twitter/callback`
  },
  github: {
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: `${url_prefix}/auth/github/callback`
  },
  linkedin: {
    clientID: process.env.LINKEDIN_CLIENTID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: `${url_prefix}/auth/linkedin/callback`
  },
  google: {
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: `${url_prefix}/auth/google/callback`
  }
};
