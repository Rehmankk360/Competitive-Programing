var longestPalindrome = function(s) {
    
    let max = 1;
    let st = 0;
    let end = 0;
    function pal(l,r) {
        while(l >= 0 && r < s.length && s[l] == s[r]) {
            l--;
            r++;
        }
        let len = r - l - 1;
        if(len > max) {
            max =len;
            st = l + 1;
            end = r - 1;
        }
    }
    for(let i=0;i<s.length-1;i++) {
        pal(i,i);
        pal(i, i+1);
    }
    return s.substring(st, end+1);
};