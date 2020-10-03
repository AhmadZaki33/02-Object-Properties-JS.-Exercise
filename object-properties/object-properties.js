

const setPropsOnObj = (object) => {
    object.x = 7;
    object.y = 8;
    object.onePlus = function (num) {
        return num + 1;
    }
};

//................................

const setPropsOnArr = (arrayObject) => {

    arrayObject.hello = function () {
        return "Hello!";
    }

    arrayObject.full = 'stack';
    arrayObject[0] = 5;

    arrayObject.twoTimes = function (number) {
        return number*2;
    }

}


//......................................


const setPropsOnFunc = (functionObject) => {
    functionObject.year = '20??';
    functionObject.divideByTwo = function (num) {
        return num/2;
    }

}

//......................................


const shallowCopy = (arg1, arg2)=> {

    if (Array.isArray(arg1) && Array.isArray(arg2)) {
        return [...arg1,...arg2];
    }
    else if (Object.keys(arg1) && Object.keys(arg2)) {
        return {...arg1, ...arg2};
    }
        
}





