var listen = require('../src/listen');
var simulant = require('simulant');

describe('listen', function() {
    it('should throw an error since arguments were not passed', function(done) {
        try {
            listen();
        }
        catch(error) {
            assert.equal(error.message, 'Missing required arguments');
            done();
        }
    });

    it('should throw an error since "target" was invalid', function(done) {
        try {
            listen(null, 'click', function() {});
        }
        catch(error) {
            assert.equal(error.message, 'First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
            done();
        }
    });

    it('should throw an error since "type" was invalid', function(done) {
        try {
            listen('.btn', false, function() {});
        }
        catch(error) {
            assert.equal(error.message, 'Second argument must be a String');
            done();
        }
    });

    it('should throw an error since "callback" was invalid', function(done) {
        try {
            listen('.btn', 'click', []);
        }
        catch(error) {
            assert.equal(error.message, 'Third argument must be a Function');
            done();
        }
    });
});

describe('listenNode', function() {
    before(function() {
        global.node = document.createElement('div');
        global.node.setAttribute('id', 'foo');
        global.node.setAttribute('class', 'foo');
        document.body.appendChild(global.node);
    });

    after(function() {
        document.body.innerHTML = '';
    });

    it('should add an event listener', function(done) {
        var target = document.querySelector('#foo');

        listen(target, 'click', function() {
            done();
        });

        simulant.fire(target, simulant('click'));
    });
});
