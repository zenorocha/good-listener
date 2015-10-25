var listen = require('../src/listen');

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
    it('should throw an error since "type" was invalid', function(done) {
        try {
            listen('.btn', false, function() {});
        }
        catch(error) {
            assert.equal(error.message, 'Second argument must be a String');
            done();
        }
    });
});
