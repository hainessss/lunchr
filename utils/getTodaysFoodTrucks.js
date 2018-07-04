const getDay            = require('./getDay.js');
const querystring       = require('querystring');
const handleError       = require('./handleError.js');
const displayResponse   = require('./displayResponse.js');
const get               = require('./get.js');

module.exports = function(page) {
  const day       = getDay();
  const limit     = 10;
  const fields    = ['location', 'applicant', 'dayofweekstr', 'start24', 'end24'];
  const sort      = "applicant";

  //calculate paging
  const getPaging  = (page, limit) => ({
    "limit": limit,
    "offset": (page - 1) * limit
  });

  const paging = getPaging(page, limit);

  //search query
  const hour  = `${new Date().getHours()}:00`;
  const where = querystring.stringify({
    "where": `start24 <= '${hour}' AND end24 >= '${hour}'`
  });

  const url = `http://data.sfgov.org/resource/bbb8-hzi6.json?$select=${fields.join(',')}&$order=${sort}&$limit=${paging.limit}&$offset=${paging.offset}&dayofweekstr=${day}&$${where}`;

  return get(url).then((result) => {
    if (result.error) {
      handleError('Query Error:', error);
    } else {
      return displayResponse(result);
    }
  }).catch((error) => {
    handleError('Data SF could not be reached right now please try again later.', error);
  });
};

