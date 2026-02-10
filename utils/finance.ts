export const getMonthlyPayment = (principal: number, annualRate: number, termMonths: number) => {
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return principal / termMonths;
  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
};

export const amortizationPreview = (principal: number, annualRate: number, termMonths: number, rows = 6) => {
  const monthlyRate = annualRate / 100 / 12;
  const payment = getMonthlyPayment(principal, annualRate, termMonths);
  let balance = principal;

  return Array.from({ length: rows }, (_, idx) => {
    const interest = balance * monthlyRate;
    const principalPaid = payment - interest;
    balance = Math.max(0, balance - principalPaid);

    return {
      month: idx + 1,
      payment,
      interest,
      principal: principalPaid,
      balance
    };
  });
};
