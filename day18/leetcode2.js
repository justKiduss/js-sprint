var maxProfit = function(prices) {
    let min=Infinity;
    let maxProfit=0;
    for(let price of prices){
       if(min>price){
        min=price;
       }
       let profit=price-min;
       if(profit>maxProfit){
        maxProfit=profit;
       }
    }
    return maxProfit;
};
const maxi=maxProfit([1,2]);
console.log(maxi)