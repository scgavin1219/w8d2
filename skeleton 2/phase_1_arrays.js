Array.prototype.uniq = function() {
    let outcome = [];
    for(let i = 0; i < this.length; i++) {
    //    if (!includes(this[i]))
        if (!outcome.includes(this[i])){
            outcome.push(this[i]);
        }
    }
    return outcome
}

console.log([1, 2, 2, 3, 3, 3].uniq())


Array.prototype.twoSum = function() { 
    let outcome = [];
    for(let i = 0; i < this.length; i++){ 
        for(let j = 0; j < this.length; j++) { 
            if(this[i] + this[j] === 0 && i < j){
                outcome.push([i,j])
            }
        }
    }
    return outcome;
}

console.log([1, 2, 3, -1, 0, -3].twoSum())

Array.prototype.transpose = function () { 
    let matrix = new Array(3).fill().map(() => Array(3).fill())
    for(i = 0; i < this.length; i++) {
        for (j = 0; j < this[0].length; j++) {
            matrix[i][j] = this[j][i]
        }
    }
    return matrix
}

 let matrix = [[1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]]

console.log(matrix.transpose())