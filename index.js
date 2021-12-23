const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === 0) {
                return true;
            }
        }
    }
    return false;
}

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

// Time complexity: O(n^2)
// Space complexity: O(n^2)


const hasUniqueChars = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

// Time complexity: O(n^2)
// Space complexity: O(n^2)


const isPangram = (str) => {
    let alpha = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
    }

    for (let i = 0; i < str.length; i++) {
        currentChar = str[i].toLowerCase();
        if (alpha[currentChar] === undefined) {
            continue;
        } else {
            alpha[currentChar]++;
        }
    }

    for (key in alpha) {
        if (alpha[key] < 1) {
            return false;
        }
    }

    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

// Time complexity: O(n)
// Space complexity: O(n)


const findLongestWord = (arr) => {
    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
}

console.log(findLongestWord(["hi", "hello"]));
// -> 5

// Time complexity: O(n)
// Space complexity: O(n)