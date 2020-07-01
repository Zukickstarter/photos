
const cleanOne = function (datum) {
  return {
    url: datum.url,
    des: datum.des,
    index: datum.index,
    type: datum.type,
  };
};

const cleanMany = function (data) {
  return data.map(one => cleanOne(one));
};

module.exports = {
  cleanOne,
  cleanMany
};