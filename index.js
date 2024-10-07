// ---------------Part1-----------------

function sumArray(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum = sum + num[i];
    }
    return sum;
}
console.log(sumArray);


function averageArray(num) {
    let sum = 0;
    for (let j = 0; j < num.length; j++) {
        sum = sum + num[j];
    }
    if (num.length === 0) {
        return 0;
    } else {
        return sum / num.length;
    }
}
console.log(averageArray);


function longestString(strings) {
    let longest = "";
    for (let k = 0; k < strings.length; k++) {
        if ( strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}
console.log(longestString);


function stringsLongerThan(arr, num) {
    return arr.filter(str => str.length > num);
}

const result = stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
console.log(result);


function printNumbers(n, current = 1) {
    if (current > n) {
        return;
    }
    console.log(current);
    printNumbers(n, current + 1);
}

printNumbers(6);


// ------------------------Part2-------------------------

