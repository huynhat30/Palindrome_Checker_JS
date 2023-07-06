function palindrome(str) {
    let str1 = '';
    str = str.replace(/[\W_]+/g, "").toLowerCase();
    str1 = str.split('').reverse().join('');
    if (str === str1){
      return true;
    }
    return false;
  }
  
  console.log(palindrome("eyee"));