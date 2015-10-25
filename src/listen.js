var is = require('./is');

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.function(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}
module.exports = listen;
