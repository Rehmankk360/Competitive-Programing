var longestCommonPrefix = function(strs) {
    strs = strs.sort((a,b) => a.length - b.length)
    if (strs.length === 1) return strs[0];
    let prefix = strs[0];
    for (let word of strs) { //word === strs[i]
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix
};