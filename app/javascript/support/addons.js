const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const chaiImmutable = require('chai-immutable');

chai.use(chaiImmutable);
chai.use(chaiEnzyme());
