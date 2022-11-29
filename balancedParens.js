// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
const hasBalancedParenthesis = sample => {
    let openCount = [...sample.matchAll(/\(/g)].length;
    let closeCount = [...sample.matchAll(/\)/g)].length;
    return (sample.indexOf('(') <= sample.indexOf(')')) && openCount === closeCount;
}

console.log(hasBalancedParenthesis(sample1));
console.log(hasBalancedParenthesis(sample2));
console.log(hasBalancedParenthesis(sample3));
console.log(hasBalancedParenthesis(sample4));
//console.log(hasBalancedParenthesis(`This is () also ) unbalanced.`));