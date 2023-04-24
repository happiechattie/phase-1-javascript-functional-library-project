function makeCopy(collection){
    let collectionArray = [];

    if (typeof collection === 'object'){
        collectionArray = Object.values(collection);
    } else {
        collectionArray = [...collection];
    }
    
    return collectionArray;
}

function myEach(collection, callback){

    for (let item of makeCopy(collection)){
        callback(item);
    }

    return collection;
}

function myMap(collection, callback){
    const collectionArray = makeCopy(collection);

    return collectionArray.map(item => callback(item));
}

function myReduce(collection, callback, acc = 0){
    const collectionArray = makeCopy(collection);
    if (acc != 0){
        return collectionArray.reduce(callback, acc);
    } else 
        return collectionArray.reduce(callback);
}

function myFind(collection, predicate){
    const collectionArray = makeCopy(collection);
    return collectionArray.find(thing => predicate(thing));
}

function myFilter(collection, predicate){
    const collectionArray = makeCopy(collection);
    return collectionArray.filter(thing => predicate(thing));
}

function mySize(collection){
    const collectionArray = makeCopy(collection);
    return collectionArray.length;
}

function myFirst(array, n){
    const collectionArray = makeCopy(array);
    if (!!n === true){
        return collectionArray.slice(0, n);
    } else {
        return collectionArray[0];
    }
}

function myLast(array, n){
    const collectionArray = makeCopy(array);
    if (!!n === true){
        return collectionArray.slice(-n);
    } else {
        return collectionArray[collectionArray.length - 1];
    }
}

function myKeys(obj){
    return Object.keys(obj);
}

function myValues(obj){
    return Object.values(obj);
}