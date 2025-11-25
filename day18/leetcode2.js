var maxProfit = function(prices) {
    let profit=0;
    let c=1;
    for(let i=2;i<prices.length;i++){
        let maxProfit;
        if(profit>=maxProfit){
            maxProfit=profit;
        }
        if(prices[i]>prices[i-1]){
            profit=(prices[i]-prices[i-c])
            console.log(maxProfit)
        }
        c++;
    }
    return maxProfit;
};
const max=maxProfit([7,1,5,3,6,4]);
console.log(max)