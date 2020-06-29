
const cleanOne = function(datum) {
    return {
        url: datum.url,
        des: datum.des,
        id: datum.id,
        type: datum.type,
    };
};

const cleanMany = function(data) {
    return data.map(one => cleanOne(one));
};

module.exports = {
    cleanOne,
    cleanMany
};