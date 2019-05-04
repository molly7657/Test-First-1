function setPropsOnObj(object) {
    object.x=7;
    object.y=8;
    object.onePlus = function(num) {
        return num+1;
    }
}

function setPropsOnArr(array) {
    array.hello = function() {return 'Hello!'};
    array.full = 'stack';
    array[0]=5;
    array.twoTimes = function(num) {return num*2};
}

function setPropsOnFunc(functionObject) {
    functionObject.year = '20??';
    functionObject.divideByTwo = function(num) {
        return num/2;
    }
    functionObject.prototype.helloWorld = function() {
        return 'Hello World';
    }
}