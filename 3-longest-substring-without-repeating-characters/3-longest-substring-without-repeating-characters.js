var lengthOfLongestSubstring = function(s) {
   
    let cs = ''
    let m = 0
    
    for(let i = s.length-1; i>= 0; i--){
        const fi = cs.indexOf(s[i])
       if(fi >= 0 ) cs = cs.slice(fi+1)
        cs+=s[i]
       if(cs.length>m) m = cs.length
    }
    
    return m

};