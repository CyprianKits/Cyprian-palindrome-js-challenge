
function isPalindrome(input){
    return input===input.split('').reverse().join('')    
}

function firstPalindrome(words){
    let words = ['busy','matma','soon']
    for(let i=0; i<words.length; i++){
        let word = words[i];
        if(isPalindrome(words)) {
            return word;
        }
    }
    return "";
}
