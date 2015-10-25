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

exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

exports.function = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};
