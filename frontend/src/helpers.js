const getDateTime = (num) => {
  let creationTime = new Date(num);
  let date =
    creationTime.getFullYear() +
    "-" +
    (creationTime.getMonth() + 1) +
    "-" +
    creationTime.getDate();
  let time =
    creationTime.getHours() +
    ":" +
    creationTime.getMinutes() +
    ":" +
    creationTime.getSeconds();
  return date + " " + time;
};

module.exports = {
  getDateTime,
};
