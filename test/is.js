var is = require('../src/is');

describe('is', function() {
    before(function() {
        global.node = document.createElement('div');
        global.node.setAttribute('id', 'foo');
        global.node.setAttribute('class', 'foo');
        document.body.appendChild(global.node);
    });

    after(function() {
        document.body.innerHTML = '';
    });

    describe('is.node', function() {
        it('should be considered as node', function() {
            assert.ok(is.node(document.getElementById('foo')));
            assert.ok(is.node(document.getElementsByTagName('div')[0]));
            assert.ok(is.node(document.getElementsByClassName('foo')[0]));
            assert.ok(is.node(document.querySelector('.foo')));
        });

        it('should not be considered as node', function() {
            assert.notOk(is.node(undefined));
            assert.notOk(is.node(null));
            assert.notOk(is.node(false));
            assert.notOk(is.node(true));
            assert.notOk(is.node(function () {}));
            assert.notOk(is.node([]));
            assert.notOk(is.node({}));
            assert.notOk(is.node(/a/g));
            assert.notOk(is.node(new RegExp('a', 'g')));
            assert.notOk(is.node(new Date()));
            assert.notOk(is.node(42));
            assert.notOk(is.node(NaN));
            assert.notOk(is.node(Infinity));
            assert.notOk(is.node(new Number(42)));
        });
    });
});
