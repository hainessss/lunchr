const getTodaysFoodTrucks = require('./utils/getTodaysFoodTrucks.js');

//state
let page = 1;
let isMoreData = true;

//initiate first fetch
getTodaysFoodTrucks(page);

//handle user input
function processInput (line) {
  const input = line.toString().charCodeAt(0);

  switch(input) {
    case 46:
    case 62:
      if (isMoreData) {
        page += 1;
        getTodaysFoodTrucks(page).then((result) => {
          if (result.length < 10) {
            isMoreData = false;
          }
        });
      }

      break;
    case 44:
    case 60:
      if (page > 1) {
        isMoreData = true;
        page -= 1;
        getTodaysFoodTrucks(page);
      }

      break;
    case 113:
      process.exit();
  }

}

process.stdin.on('data', processInput)
