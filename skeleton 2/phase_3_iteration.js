Array.prototype.bubble_sort = function() { 
    let sorted = false;
    while(sorted !== true) { 
        sorted = true;
        for(let i = 0; i < this.length - 1; i++) { 
            let j = i + 1;
            if (this[i] > this[j] ) { 
                sorted = false;
                let value =  this[i];
                this[i] = this[j];
                this[j] = value;
            }
        }
    }
    return this;
}

console.log([3, 5, 7, 2, 1].bubble_sort())


String.prototype.subStrings = function() {
    let outcome = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length + 1; j++) {
            let sub = this.slice(i, j);
            outcome.push(sub);
        }
    }
    return outcome;
}

console.log("jump".subStrings())
