export const CalculateTax = (amount) => {
  let breakdown = [];
  let taxTotal = 0;
  let incomeTotal=amount
  if (amount <= 300000) {
    breakdown.push({
      tax: 0,
      incomeBreakDown: amount,
    });
  } else if (amount <= 700000) {
    breakdown.push({
      tax: 0,
      incomeBreakDown: 300000,
    });
    breakdown.push({
      tax: ((amount - 300000) * 5) / 100,
      incomeBreakDown: amount - 300000,
    });
    let taxAmount = ((amount - 300000) * 5) / 100;
    taxTotal = taxAmount;
  } else if (amount <= 1000000) {
    breakdown.push({
      tax: 0,
      incomeBreakDown: 300000,
    });
    breakdown.push({
      tax: (400000 * 5) / 100,
      incomeBreakDown: 400000,
    });
    breakdown.push({
      tax: ((amount - 700000) * 10) / 100,
      incomeBreakDown: amount - 700000,
    });
    taxTotal = (400000 * 5) / 100 + ((amount - 700000) * 10) / 100;
  } else if (amount <= 1200000) {
    breakdown.push({
      tax: 0,
      incomeBreakDown: 300000,
    });
    breakdown.push({
      tax: (400000 * 5) / 100,
      incomeBreakDown: 400000,
    });
    breakdown.push({
      tax: (300000 * 10) / 100,
      incomeBreakDown: 300000,
    });
    breakdown.push({
      tax: ((amount - 1000000) * 15) / 100,
      incomeBreakDown: amount - 1000000,
    });
    taxTotal =
      (400000 * 5) / 100 +
      (300000 * 10) / 100 +
      ((amount - 1000000) * 15) / 100;
  } else if (amount <= 1500000) {
    breakdown.push({
      tax: 0,
      incomeBreakDown: 300000,
    });
    breakdown.push({
      tax: (400000 * 5) / 100,
      incomeBreakDown: 400000,
    });
    breakdown.push({
      tax: (300000 * 10) / 100,
      incomeBreakDown: 300000,
    });
    breakdown.push({
      tax: (200000 * 15) / 100,
      incomeBreakDown: 200000,
    });
    breakdown.push({
      tax: ((amount - 1200000) * 20) / 100,
      incomeBreakDown: amount - 1200000,
    });
    taxTotal =
      (400000 * 5) / 100 +
      (300000 * 10) / 100 +
      (200000 * 15) / 100 +
      ((amount - 1200000) * 20) / 100;
  } else {
    breakdown.push({
      tax: 0,
      incomeBreakDown: 300000,
    });
    breakdown.push({
      tax: (400000 * 5) / 100,
      incomeBreakDown: 400000,
    });
    breakdown.push({
      tax: (300000 * 10) / 100,
      incomeBreakDown: 300000,
    });
    breakdown.push({
      tax: (200000 * 15) / 100,
      incomeBreakDown: 200000,
    });
    breakdown.push({
      tax: (300000 * 20) / 100,
      incomeBreakDown: 300000,
    });
    breakdown.push({
      tax: ((amount - 1500000) * 30) / 100,
      incomeBreakDown: amount - 1500000,
    });

    taxTotal =
      (400000 * 5) / 100 +
      (300000 * 10) / 100 +
      (200000 * 15) / 100 +
      (300000 * 20) / 100 +
      ((amount - 1500000) * 30) / 100;
  }
  return { taxTotal, breakdown,incomeTotal };
};
