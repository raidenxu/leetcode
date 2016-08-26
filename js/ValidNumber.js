/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return s.match(/^ *[\+-]?(([0-9]+)|((\.[0-9]+))|([0-9]+\.[0-9]*))(e[\+-]?[0-9]+)? *$/)!=undefined
};

/**
 * unit test
 */
var test = function(){
    var cases = [
        "2e0",
        "e",
        ".123",
        "0",
        " 0.1 ",
        "abc",
        "1 a",
        "2e10",
    ]
    for(var i=0; i<cases.length; i++){
        console.log(cases[i], JSON.stringify(isNumber(cases[i])));
    }
}
test();