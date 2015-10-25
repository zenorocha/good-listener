exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object HTMLCollection]' || type === '[object NodeList]')
        && (value.hasOwnProperty('length'))
        && (value.length === 0 || exports.node(value[0]));
};
