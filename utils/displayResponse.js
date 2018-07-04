const clear = require('clear');
const chalk = require('chalk');

module.exports = (response) => {
  clear();

  response.forEach((truck) => {
    console.log(chalk.hex('#88BFB0')(truck.applicant), chalk.hex('#E8D5C3')(truck.location));
  });

  console.log("hit '<' for prev, hit '>' for next, 'q' to quit")

  return response;
}
