/**
 * Question 122. Best Time to Buy and Sell Stock II
 * 
 * You are given an integer array `prices` where `prices[i]` represents the price of a given stock on the ith day.
 * 
 * On each day, you may decide to buy and/or sell the stock. You can hold at most one share of the stock at any time.
 * However, you are allowed to buy and sell on the same day.
 * 
 * The goal is to find and return the maximum profit you can achieve.
 * 
 * Approach:
 * - Iterate through the prices array starting from the second day.
 * - If today's price is higher than yesterday's, consider it a profitable trade and add the difference to the total profit.
 * - This greedy approach captures all upward price movements, ensuring maximum profit.
 * 
 * Example 1:
 * Input: prices = [7, 1, 5, 3, 6, 4]
 * Output: 7
 * Explanation:
 *  - Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5 - 1 = 4
 *  - Buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6 - 3 = 3
 *  - Total profit = 4 + 3 = 7
 * 
 * Example 2:
 * Input: prices = [1, 2, 3, 4, 5]
 * Output: 4
 * Explanation:
 *  - Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5 - 1 = 4
 *  - Total profit = 4
 * 
 * Example 3:
 * Input: prices = [7, 6, 4, 3, 1]
 * Output: 0
 * Explanation:
 *  - No profitable transactions can be made, so the maximum profit is 0
 * 
 * For more details, visit the LeetCode problem page:
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // This problem is an extension of LeetCode #121, where only a single buy and sell are allowed to maximize profit.
    // In this problem (LeetCode #122), you can perform multiple transactions: buy, sell, and then buy and sell again.
    // Additionally, buying and selling on the same day is allowed.

    // Reference: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/5816678/video-sell-a-stock-immediately

    // Key Observations:
    // 1. Consider the stock prices [1, 2, 50]:
    //    - Whether you buy at 1, sell at 2, then buy again at 2 and sell at 50, or simply buy at 1 and sell at 50 directly,
    //      the total profit remains the same: 50 - 1 = (2 - 1) + (50 - 2) = 49.

    // 2. Consider the stock prices [1, 2, 1, 50]:
    //    - In this case, the maximum profit is 50, not 49.
    //    - This is because: (2 - 1) + (50 - 1) = 1 + 49 = 50, highlighting the benefit of capturing all upward trends.

    // Conclusion:
    // - The approach is to iterate from the second day onward, treating each day as a potential selling day.
    // - Compare each day's price with the previous day's price. If today's price is higher, consider it a profitable trade and add the difference to the total profit.
    // - This greedy approach ensures that every opportunity for profit is captured.

    if (prices.length <= 1 )return 0;
    let sellDay = 1;
    let maxProfit = 0

    while(sellDay < prices.length){
        let prevDay = sellDay - 1;
        let profit = prices[sellDay] - prices[prevDay]
        if(profit > 0){
            maxProfit = maxProfit + profit;
        }
        sellDay = sellDay + 1;
    }
    return maxProfit;
};

let prices = [7,1,5,3,6,4];

console.log(`\nPrices : ${prices} \nBest Profit: ${maxProfit(prices)}`);

prices = [7,6,5,4,3,2,1];

console.log(`\nPrices : ${prices} \nBest Profit: ${maxProfit(prices)}`);

prices = [1, 2, 50];

console.log(`\nPrices : ${prices} \nBest Profit: ${maxProfit(prices)}`);

prices = [1, 2, 1, 50];

console.log(`\nPrices : ${prices} \nBest Profit: ${maxProfit(prices)}`);