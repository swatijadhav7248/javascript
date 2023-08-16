function isPalindrome (string){
   const arrayValues = string.split('');
   const reverseArrayValues = arrayValues.reverse();
   const reverseString = reverseArrayValues.join('');
   console.log(`Given String is: ${string}`);
   if(string == reverseString) {
    console.log('It is a Palindrome');
   } else {
    console.log('It is not a Palindrome');
   }
}
isPalindrome("madam");
console.log("--------------------------------------------------------------------");
isPalindrome("141");
console.log("--------------------------------------------------------------------");
isPalindrome("sunday");
console.log("--------------------------------------------------------------------");
isPalindrome("mom");
console.log("--------------------------------------------------------------------");
isPalindrome("listen");
console.log("--------------------------------------------------------------------");
isPalindrome("dad");