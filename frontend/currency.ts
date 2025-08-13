// Central configuration for currency
export const CURRENCY_CODE = 'EUR'; // Change 'INR' to 'USD', 'EUR', etc.
export const CURRENCY_SYMBOL = '€'; // Change '₹' to '$', '€', etc.
export const LOCALE = 'en-IN';      // Change 'en-IN' to 'en-US', 'en-GB', etc.

/**
 * Formats a numeric value into the application's base currency.
 * @param amount The number to format.
 * @param precision The number of decimal places to show. Defaults to 0.
 * @returns A formatted currency string (e.g., "₹50,000").
 */
export const formatCurrency = (amount: number, precision: number = 0): string => {
  return new Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: CURRENCY_CODE,
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(amount);
};

/**
 * Parses a formatted currency string or number into a number.
 * @param value The formatted currency string (e.g., "₹50,000" or "50000").
 * @returns The parsed numeric value.
 */
export const parseCurrency = (value: string | number): number => {
  if (typeof value === 'number') {
    return value;
  }
  // This regex removes currency symbols, commas, etc.
  return parseFloat(value.replace(/[^0-9.-]+/g, ''));
};