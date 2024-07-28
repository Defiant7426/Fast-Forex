export function populateCustomSelect(containerId, currencies) {
    const container = document.getElementById(containerId);
    const selectedDiv = container.querySelector('.custom-select-selected');
    const optionsDiv = container.querySelector('.custom-select-options');

    currencies.forEach(currency => {
        const option = document.createElement('div');
        option.classList.add('custom-option');
        option.dataset.value = currency.currency;
        option.innerHTML = `
            <img
                src="https://flagcdn.com/16x12/${currency.code.toLowerCase()}.png"
                srcset="https://flagcdn.com/32x24/${currency.code.toLowerCase()}.png 2x,
                        https://flagcdn.com/48x36/${currency.code.toLowerCase()}.png 3x"
                width="16"
                height="12"
                alt="${currency.name}">
            ${currency.currency} - ${currency.name}`;
        
        option.addEventListener('click', () => { // Set the selected option when clicking an option
            selectedDiv.innerHTML = option.innerHTML;
            selectedDiv.dataset.value = currency.currency;
            optionsDiv.style.display = 'none';
        });

        optionsDiv.appendChild(option); // Add the option to the dropdown
    });

    selectedDiv.addEventListener('click', () => { // Show the dropdown when clicking the selected div
        optionsDiv.style.display = optionsDiv.style.display === 'block' ? 'none' : 'block'; // Toggle the dropdown
    });

    document.addEventListener('click', (event) => { // Close the dropdown when clicking outside
        if (!container.contains(event.target)) { // If the clicked element is not inside the container
            optionsDiv.style.display = 'none';
        }
    });
}