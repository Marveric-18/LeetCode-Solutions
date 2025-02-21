/**
 * Question 121. Best Time to Buy and Sell Stock
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
    Example 1:

    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
    
    Example 2:

    Input: prices = [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transactions are done and the max profit = 0.

 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 * Please checkout the Leetcode Question for more Description
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { 
    /** 
     * We start by comparing buyDay and sellDay.
     * Let's assume we buy on the 1st day and sell on the 2nd.
     * 
     * - If there's a **profit** → Calculate the **maximum profit** and then increase sellDay to check for higher profits.
     * - If there's **no profit** → We shift buyDay to the next day. // That's what I did at first
     * 
     *    // But wait, if we use **buyDay += 1**, it would move forward step-by-step,
     *    // potentially skipping profitable sellDays.
     *    // This could cause us to miss out on the best selling opportunities.
     *    
     *    // Hence, we use **buyDay = sellDay;** 
     *    // This directly moves buyDay to the lower price found at sellDay.
     * 
     * After this adjustment, we continue with **sellDay += 1** to keep exploring better selling points.
     */
    let buyDay = 0;
    let sellDay = 0;
    let maxProfit = -Infinity;

    while(sellDay < prices.length){
        // If Profit
        if(prices[sellDay] > prices[buyDay]){
            // calculate maxProfit 
            maxProfit = Math.max(prices[sellDay] - prices[buyDay] , maxProfit);
        }else{
            // Reset buyDay to current sellDay
            buyDay = sellDay;
        }
        // Increase sellDay
        sellDay = sellDay + 1;
    }
    return maxProfit > 0 ? maxProfit : 0;
};


let prices = [7,1,5,3,6,4];

console.log(`\nPrices : ${prices} \nBest Profit: ${maxProfit(prices)}`);

prices = [7,6,5,4,3,2,1];

console.log(`\nPrices : ${prices} \nBest Profit: ${maxProfit(prices)}`);