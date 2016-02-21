## Very simple maybe 'monad' for javascript with extra helpers.

### Usual things to do with a maybe:

```javascript

var value = Maybe(2);
var null = Maybe(null);

value.get(); // 2

null.get(); // null

value.orElse(3); // 2

null.orElse(3); // 3

var doubler = function (value) {
    return value * 2;
};

value.map(doubler).get() // 4

null.map(doubler).get() // null


```


### Examples for pluck(); an extra helper that may come handy sometimes:

```javascript

var object = {
    innerObject : {
        otherInnerObject : {
            value : "deepValue"
        }
    }
};

Maybe(object).pluck("innerObject").pluck("otherInnerObject").pluck("value").get() // "deepValue"

Maybe(object).pluck("innerObject.otherInnerObject.value").get() // "deepValue"

Maybe(object).pluck("innerObject.nonExistingAttribute.value").get() // null

Maybe(object).pluck("innerObject.nonExistingAttribute.value").orElse("defaultValue") // "defaultValue"


```