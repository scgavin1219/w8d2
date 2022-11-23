Array.prototype.myEach = function(fun){
    
    for(let i = 0; i < this.length; i++) { 
         fun(this[i]);
    }
}

function doubler(num) {
     (num * 2);  
}
//console.log([1,2,3].myEach(doubler))


Array.prototype.myMap = function (callback) {
    let outcome = [];
    this.myEach(x => outcome.push(callback(x)))
    return outcome; 
}

// console.log([1,2,3].myMap(doubler))


//console.log([1, 2, 3].myEach(element => doubler(element)))

Array.prototype.myReduce = function(callback, initialValue){
    let acc = 0
    if( initialValue){
         acc = initialValue;
    }
    for(let i = 0; i < this.length; i++) {
            acc += callback(this[i])
    }
    return acc;
}


function doubler(num) {
    return num;
}

console.log([1, 2, 3].myReduce(doubler))