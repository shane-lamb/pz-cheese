const dollarFormatter = new Intl.NumberFormat('en-AU',
    { style: 'currency', currency: 'AUD' }
);

export function formatDollars(number: number) {
    return dollarFormatter.format(number);
}
