const repeatString = function(text,repeats) {
    if (repeats < 0) return 'ERROR'
    let string = ''
    for (i = 0; i < repeats; i++) { 
        string +=text;
      }
    return string;
}
module.exports = repeatString
