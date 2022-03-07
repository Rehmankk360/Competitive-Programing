/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(c, t) {
        const cms = []
 function bt(i= 0, s = 0, cm =[]){
         if(s> t) return
         if(s == t) {
                 cms.push(cm.slice())
                 s = 0
                 return
         }
         for(let j = i; j<c.length; j++){
                cm.push(c[j])
                 bt(j, s+c[j],cm)
                 cm.pop()
         }
 }
        bt()
return cms
};