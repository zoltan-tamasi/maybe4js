var expect = require('chai').expect;

var Maybe = require('..');

describe('Maybe', function() {

    it('should create Maybe', function() {

        var maybe = Maybe("test");

        expect(maybe.get()).to.equal("test");
    });

    it('isNull should return true on null values', function () {

        var maybe = Maybe(null);

        expect(maybe.isNull()).to.equal(true);
    });

    it('map should work', function () {

        var maybe = Maybe(2);

        maybe.map(function (value) {
            return value * 2;
        });

        expect(maybe.get()).to.equal(4);
    });

    it('orElse should return default value if Maybe value is null', function () {

        var maybe = Maybe(null);

        expect(maybe.orElse(4)).to.equal(4);
    });

    it('orElse should return Maybe value if Maybe value is not null', function () {

        var maybe = Maybe(2);

        expect(maybe.orElse(4)).to.equal(2);
    });

    it('pluck should return a Maybe object of the plucked value', function () {

        var maybe = Maybe({
            innerObject :  {
                value : 2
            }
        });

        expect(maybe.pluck("innerObject.value").get()).to.equal(2);
    });

    it('pluck should return a null Maybe object of the plucked value if it doesn\'t exist', function () {

        var maybe = Maybe({
            innerObject :  {
                value : 2
            }
        });

        expect(maybe.pluck("innerObj.value").isNull()).to.equal(true);
    });

    it('pluck should work well with orElse()', function () {

        var maybe = Maybe({
            innerObject :  {
                value : 2
            }
        });

        expect(maybe.pluck("innerObj.value").orElse(2)).to.equal(2);
    });
});
