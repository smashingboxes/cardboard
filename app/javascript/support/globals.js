const chai = require('chai');
const faker = require('faker');
const enzyme = require('enzyme');
const sinon = require('sinon');
const fixtureFactory = require('./fixtures/factories');

global.apiRequest = chai.request;
global.expect = chai.expect;
global.faker = faker;
global.fixture = fixtureFactory;
global.sandbox = sinon.sandbox;
global.shallow = enzyme.shallow;
