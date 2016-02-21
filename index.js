var Maybe = function (data) {
    this.data = data;
};

Maybe.prototype.orElse = function (otherData) {
    return this.data || otherData;
};

Maybe.prototype.map = function (fn) {
    if (this.data) {
        this.data = fn(this.data);
    }

    return this;
};

Maybe.prototype.isNull = function () {
    return this.data === undefined || this.data === null;
};

Maybe.prototype.get = function () {
    return this.data;
};

Maybe.prototype.pluck = function (attr) {
    if (attr.indexOf(".") === -1) {
        if (this.data && this.data.hasOwnProperty(attr)) {
            return new Maybe(this.data[attr]);
        } else {
            return new Maybe();
        }
    } else {
        var steps = attr.split(".");
        var pluckedData = this.data;

        while (pluckedData !== undefined && pluckedData !== null && steps.length > 0) {
            var step = steps.shift();
            if (pluckedData.hasOwnProperty(step)) {
                pluckedData = pluckedData[step];
            } else {
                return new Maybe();
            }
        }

        return new Maybe(pluckedData);
    }
};

module.exports = function (data) {
    return new Maybe(data);
};
