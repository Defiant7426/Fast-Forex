import { populateCustomSelect } from './Flags.js';

const currencies = [
    { currency: 'USD', code: 'us', name: 'United States' },
    { currency: 'JPY', code: 'jp', name: 'Japan' },
    { currency: 'GBP', code: 'gb', name: 'United Kingdom' },
    { currency: 'AUD', code: 'au', name: 'Australia' },
    { currency: 'BRL', code: 'br', name: 'Brazil' },
    { currency: 'ARS', code: 'ar', name: 'Argentina' },
    { currency: 'CLP', code: 'cl', name: 'Chile' },
    { currency: 'PEN', code: 'pe', name: 'Peru' },
    { currency: 'COP', code: 'co', name: 'Colombia' },
    { currency: 'MXN', code: 'mx', name: 'Mexico' },
    { currency: 'EUR', code: 'eu', name: 'European Union' },
    { currency: 'CNY', code: 'cn', name: 'China' },
    { currency: 'KRW', code: 'kr', name: 'South Korea' },
    { currency: 'INR', code: 'in', name: 'India' },
    { currency: 'RUB', code: 'ru', name: 'Russia' },
    { currency: 'ZAR', code: 'za', name: 'South Africa' },
    { currency: 'NZD', code: 'nz', name: 'New Zealand' },
    { currency: 'CAD', code: 'ca', name: 'Canada' },
    { currency: 'CHF', code: 'ch', name: 'Switzerland' },
    { currency: 'SEK', code: 'se', name: 'Sweden' },
    { currency: 'DKK', code: 'dk', name: 'Denmark' },
    { currency: 'NOK', code: 'no', name: 'Norway' },
    { currency: 'HUF', code: 'hu', name: 'Hungary' },
    { currency: 'CZK', code: 'cz', name: 'Czech Republic' },
    { currency: 'PLN', code: 'pl', name: 'Poland' },
    { currency: 'TRY', code: 'tr', name: 'Turkey' },
];

currencies.sort((a, b) => a.currency.localeCompare(b.currency));

document.addEventListener('DOMContentLoaded', () => {
    populateCustomSelect('from-custom-select-container', currencies);
    populateCustomSelect('to-custom-select-container', currencies);
});


export async function convert() {
    const fromCurrency = document.getElementById('from-custom-select-container')
        .querySelector('.custom-select-selected')
            .dataset.value;
    const toCurrency = document.getElementById('to-custom-select-container')
        .querySelector('.custom-select-selected')
            .dataset.value;
    const amount = document.getElementById('amount').value;
    try{
        const key = "4ee1c420ee3bb1f067953a60" 
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${key}/pair/${fromCurrency}/${toCurrency}/${amount}`);
        const data = await response.json();
        const rate = data.conversion_rate;
        const result = amount * rate;
        
        document.getElementById('result-from').textContent = `${amount} ${fromCurrency} =`;
        document.getElementById('result').textContent = `${result.toFixed(8)} ${toCurrency}`;
        document.getElementById('aditional-info').textContent = `1 ${fromCurrency} = ${rate} ${toCurrency}`;

    }catch(error){
        console.error(error);
    }
    
}

