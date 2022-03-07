/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    amount+= 1
    
    const h = new Array(amount).fill(amount)
    
    h[0] = 0
    
    
    
    for(let i = 0; i<coins.length; i++ ){
        
        
        for(let j = coins[i]; j<amount; j++){
            
            h[j] = Math.min(h[j], h[j-coins[i]]+1)
            
        }
        
        
    }
    
    
    
    return h[amount-1] === amount ? -1 : h[amount-1]
    

};







        