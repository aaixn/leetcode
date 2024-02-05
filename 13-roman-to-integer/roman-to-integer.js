/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let number = s.split('')
    let ans = 0
    
    for (i = 0; i < number.length; i++) {
        if (table[number[i]] < table[number[i+1]]) {
            ans += table[number[i+1]] - table[number[i]]
            i++
        } else {
            ans += table[number[i]]
        }
    }
    
    return ans
};