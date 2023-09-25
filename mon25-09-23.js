const capitalize = (str) => {
    return str.split(" ") // split str into array
    .map((word) => word[0].toUpperCase() + word.slice(1)) // format word
    .join(" "); // join words array back to str
    
}

// capitalize("How can mirrors be real if our eyes aren't real")

function getCount(str) {
    str = str.toLowerCase();
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        for (let vowel of vowels) {
            if (char === vowel) {
                count += 1;
            }
        }
    }
    console.log(count)
    return count;
}

// second solution
function getCount(str) {
    // using regex
    return (str.match(/[aeiou]/ig)||[]).length;
}

getCount("profsain Mudi")