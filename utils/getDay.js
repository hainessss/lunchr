const days = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"];

module.exports = function() {
  const dayNumber = new Date().getDay();

  return days[dayNumber];
};
