'use strict';

module.exports = {
  id: (() => {
    let i = 1;

    return () => i++;
  })(),
  name: ['company.companyName']
};
