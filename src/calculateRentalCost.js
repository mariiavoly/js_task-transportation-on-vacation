/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;
  const threeDayDiscount = 20;
  const sevenDayDiscount = 50;

  if (days < 3) {
    return days * dailyPrice;
  }

  if (days < 7) {
    return days * dailyPrice - threeDayDiscount;
  }

  return days * dailyPrice - sevenDayDiscount;
}

module.exports = calculateRentalCost;
