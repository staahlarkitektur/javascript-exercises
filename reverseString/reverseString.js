const reverseString = function(word) {
    let reverseWord = word.split('');
    let newWord= reverseWord.reverse();
    return newWord.join('');
}

module.exports = reverseString
