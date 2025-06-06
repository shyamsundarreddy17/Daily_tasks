function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();  
    return s === s.split('').reverse().join('');
}


let string = "abcb";
if (isPalindrome(string)) {
    console.log(`'${string}' is a palindrome.`);
} else {
    console.log(`'${string}' is not a palindrome.`);
}
