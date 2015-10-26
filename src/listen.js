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
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    return listenFactory([node], type, callback);
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    return listenFactory(nodeList, type, callback);
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    var nodes = document.querySelectorAll(selector);
    return listenFactory(nodes, type, callback);
}

/**
 * Factory to create an event listener to a element
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection|HTMLElement} elements
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenFactory(elements, type, callback) {
    Array.prototype.forEach.call(elements, function(element) {
        element.addEventListener(type, callback, false);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(elements, function(element) {
                element.removeEventListener(type, callback);
            });
        }
    };
}

module.exports = listen;
